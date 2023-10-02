import ItemsDAO from '../../DAO/itemsDAO.js'
import AppError from '../../appError.js'
import { tryCatchWrapper as wrapperFn } from '../../../wrapperFn.js'

export default class ItemsController {
  static async apiGetItems(req, res, next) {
    const itemsPerPage = req.query.itemsPerPage
      ? parseInt(req.query.itemsPerPage)
      : 10
    const page = req.query.page ? parseInt(req.query.page) : 0

    let filters = {}
    if (req.query.size) {
      filters.size = req.query.size
    } else if (req.query.category) {
      filters.category = req.query.category
    }
    const { itemsList, totalNumItems } = await ItemsDAO.getItems({
      filters,
      page,
      itemsPerPage,
    })
    let response = {
      items: itemsList,
      page: page,
      filters: filters,
      entries_per_page: itemsPerPage,
      total_results: totalNumItems,
    }
    res.json(response)
  }
  static apiGetItemBySku = () =>
    wrapperFn(async (req, res, next) => {
      let item
      let sku = req.query.sku
      item = await ItemsDAO.getItemBySKU(sku)
      next(new AppError(`Unable to find item with the sku: ${sku}`, 404))

      res.json(item)
    })
  //Backend: test posting to see if functionality remains
  static apiPostItem = () =>
    wrapperFn(async (req, res, next) => {
      const item = {
        category: req.body.category,
        itemId: req.body.itemId,
        SKU: req.body.SKU,
        colors: req.body.colors,
        images: req.body.images,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
        sizes: req.body.sizes,
      }
      const userInfo = {
        name: req.body.name,
        userId: req.body.user_id,
      }
      const ItemResponse = await ItemsDAO.postItem(item, userInfo)
      res.json({
        status: 'success',
        data: ItemResponse,
        message: ` Successfully posted the Item : ${item}`,
      })

      next(new AppError('Unable to post item', 404))
    })

  static async apiUpdateItem(req, res, next) {
    try {
      const item = {
        category: req.body.category,
        itemId: req.body.itemId,
        colors: req.body.colors,
        images: req.body.images,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
        sizes: req.body.sizes,
      }
      const userId = req.body.user_id

      const ItemResponse = await ItemsDAO.updateItem(item, userId)

      let { error } = ItemResponse
      if (error) res.status.json({ error })
      if (ItemResponse.modifiedCount === 0) {
        throw new Error(
          'unable to update item. User must be an Admin to update.'
        )
      }
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiDeleteItem(req, res, next) {
    try {
      const itemId = req.body.item_id
      const userId = req.body.user_id
      const ItemResponse = await ItemsDAO.deleteItem(itemId, userId)
      res.json({ status: 'success' })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
