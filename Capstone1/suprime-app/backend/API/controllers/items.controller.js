import ItemsDAO from '../../DAO/itemsDAO.js'
import AppError from '../../utils/appError.js'

let err
let response = {}

export default class ItemsController {
  static async apiGetItems(req, res, next) {
    if (req.query.sku) return next()
    const itemsPerPage = req.query.itemsPerPage
      ? parseInt(req.query.itemsPerPage)
      : 6
    const page = req.query.page ? parseInt(req.query.page) : 0

    let filters = {}
    if (req.query.category) {
      filters.category = req.query.category
    }
    const { totalNumItems, itemsList } =
      await ItemsDAO.apiGetAllItemsByCategory({
        filters,
        page,
        itemsPerPage,
      })

    response = {
      items: itemsList,
      filters: filters,
      page: page,
      entries_per_page: itemsPerPage,
      total_results: totalNumItems,
    }
    err = new AppError(response.message, res.status)
    !response
      ? next(err) && res.json((response = { error: err }))
      : res.json(response)
  }

  static async apiGetItemBySKU(req, res, next) {
    try {
      let sku = req.query.sku || {}
      let filters = {}
      if (req.query.sku) {
        filters.sku = req.query.sku
      }
      const { item } = await ItemsDAO.apiGetItemBySKU({ filters, sku })
      response = {
        foundItem: item,
        filter: filters,
      }

      if (sku === undefined || item.length === 0 || sku === null) {
        res.json({
          itemSKU: `${sku}`,
          error: `No item found with sku: ${sku}`,
        })
      } else {
        res.json(response)
      }
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err) && res.json((response = { error: err }))
    }
  }

  static async apiAddNewItem(req, res, next) {
    try {
      const itemObj = req.body.item
      const item = {
        category: itemObj.category,
        itemId: itemObj.itemId,
        color: itemObj.color,
        image: itemObj.image,
        price: itemObj.price,
        description: itemObj.description,
        size: itemObj.size,
      }

      const ItemResponse = await ItemsDAO.apiAddNewItem(item)

      res.json({
        status: 'error' in ItemResponse ? 'Fail' : 'Success',
        data: ItemResponse[0],
        itemSKU: ItemResponse[0].SKU,
      })
    } catch (e) {
      err = new AppError(e.message, res.status)
      if (e) next(err)
      res.json({ data: {}, error: `${e}` })
    }
  }

  static async apiUpdateItemBySKU(req, res, next) {
    try {
      const sku = req.query.sku || {}
      let filters = {}
      if (req.query.sku) {
        filters.sku = req.query.sku
      }
      const itemObj = req.body.item
      const item = {
        category: itemObj.category,
        itemId: itemObj.itemId,
        SKU: sku,
        color: itemObj.color,
        image: itemObj.image,
        price: itemObj.price,
        description: itemObj.description,
        size: itemObj.size,
      }

      const ItemResponse = await ItemsDAO.apiUpdateItemBySKU(sku, item)
      const updatedItem = await ItemsDAO.apiGetItemBySKU({ filters, sku })
      res.send({
        status: ItemResponse.modifiedCount === 0 ? 'Fail' : 'Success',
        data: updatedItem.item[0],
        message:
          ItemResponse.matchedCount === 1
            ? `Matched ${ItemResponse.matchedCount} document`
            : `No matches for itemSku: ${req.query.sku}`,
      })
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)
      res.send({ data: {}, error: `api: ${e}` })
    }
  }

  static async apiDeleteItem(req, res, next) {
    try {
      const sku = req.query.sku || {}
      const ItemResponse = await ItemsDAO.apiDeleteItem(sku)
      res.send({
        status: ItemResponse.deletedCount === 0 ? 'Fail' : 'Success',
        data: ItemResponse,
        message:
          ItemResponse.deletedCount === 1
            ? `Deleted ${ItemResponse.deletedCount} document`
            : `No matches for itemSku: ${sku}`,
      })
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)
      res.send({ data: {}, error: `api: ${e}` })
    }
  }
}
