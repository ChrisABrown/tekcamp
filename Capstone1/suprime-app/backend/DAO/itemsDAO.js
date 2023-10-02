import crypto from 'crypto'
import Item from './models/Item.cjs'

let items
const SKU = crypto.randomBytes(6).toString('hex')

export default class ItemsDAO {
  static async injectDB(conn) {
    if (items) return

    try {
      items = await conn.db(process.env.SUPRIME_DB_NS).collection('Stock')
    } catch (e) {
      console.error(`unable to connect in ItemsDAO: ${e}`)
    }
  }

  static async getItems({ filters = null, page = 0, itemsPerPage = 10 } = {}) {
    let query
    if (filters) {
      if ('size' in filters) {
        query = {
          $text: {
            $search: filters['size'],
          },
        }
      } else if ('category' in filters) {
        query = {
          category: {
            $eq: filters['category'],
          },
        }
      }
    }
    let cursor
    try {
      cursor = await items.find(query).limit(itemsPerPage)
      const itemsList = await cursor.toArray()
      const totalNumItems = await items.countDocuments(query)
      return { itemsList, totalNumItems }
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { itemsList: [], totalNumItems: 0 }
    }
  }

  static async getItemBySKU(sku) {
    try {
      return await items
        .aggregate([
          {
            $set: {
              SKU: {
                SKU: `${SKU}`,
              },
            },
            $match: {
              SKU: sku,
            },
          },
        ])
        .next()
    } catch (e) {
      console.error(`Unable to find item with the SKU: ${sku}`)
      throw e
    }
  }

  // static async updateItem(item, userId) {
  //   try {
  //     item = await Item.findOne(item)
  //     // if(userId)
  //     // const updatedItem = await Item.findByIdAndUpdate(item._id)
  //   } catch (error) {}
  // }

  static async postItem({ item }) {
    try {
      item = new Item({
        category: item.category,
        itemId: item.itemId,
        SKU: SKU,
        colors: item.colors,
        images: item.images,
        quantity: item.quantity,
        price: item.price,
        description: item.description,
        sizes: item.sizes,
      })
      return await Item.create(item)
    } catch (e) {
      console.error(`unable to post item: ${e}`)
      return { error: e }
    }
  }

  static async deleteItem(itemId, userId) {
    try {
      const item = await Item.findById(itemId)
      // const user = await User.findById(userId)
      // if (user.isAdmin) return `Successfully deleted item: ${item}`.next()
    } catch (e) {
      console.error(`unable to delete item. User must be an admin to delete`)
    }
  }
}
