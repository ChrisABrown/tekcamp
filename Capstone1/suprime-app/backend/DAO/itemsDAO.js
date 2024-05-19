import Item from './models/Item.js'

export default class ItemsDAO {
  static async apiGetAllItemsByCategory({
    filters = null,
    page = 0,
    itemsPerPage = 6,
  } = {}) {
    let query

    if (filters) {
      if ('category' in filters) {
        query = {
          category: {
            $eq: filters['category'],
          },
        }
      }
    }

    try {
      const itemsList = await Item.find(query).limit(itemsPerPage)
      const totalNumItems = await Item.countDocuments(query)
      return { totalNumItems, itemsList }
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { itemsList: [], totalNumItems: 0 }
    }
  }

  static async apiGetItemBySKU({ filters = null, sku } = {}) {
    let query

    if (filters) {
      if ('sku' in filters) {
        query = {
          SKU: {
            $eq: filters['sku'],
          },
        }
      }
    }
    let item
    try {
      item = await Item.find(query)

      return { item }
    } catch (e) {
      console.error(`Something went wrong in getItemBySKU, ${e}`)
      return { foundItem: {} }
    }
  }

  static async apiAddNewItem(item) {
    try {
      const newItem = new Item({
        category: item.category,
        itemId: item.itemId,
        SKU: item.SKU,
        color: item.color,
        image: item.image,
        price: item.price,
        description: item.description,
        size: item.size,
      })

      newItem.save()

      const postedItem = await Item.find({ _id: newItem._id })
      return postedItem
    } catch (e) {
      return { error: `unable to post item: ${e}` }
    }
  }

  static async apiUpdateItemBySKU(sku, item = {}) {
    try {
      const updateResponse = await Item.updateOne(
        {
          SKU: sku,
        },
        {
          $set: {
            category: item.category,
            itemId: item.itemId,
            SKU: item.SKU,
            color: item.color,
            image: item.image,
            price: item.price,
            description: item.description,
            size: item.size,
          },
        }
      )
      return updateResponse
    } catch (e) {
      return { error: e, message: `unable to update item: ${e}` }
    }
  }

  static async apiDeleteItem(sku) {
    try {
      const deleteResponse = await Item.deleteOne({ SKU: sku })
      return deleteResponse
    } catch (e) {
      return {
        error: e,
        message: `unable to delete item. User must be an admin to delete`,
      }
    }
  }
}
