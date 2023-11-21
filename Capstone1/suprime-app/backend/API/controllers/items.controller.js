import ItemsDAO from '../../DAO/itemsDAO.js'
import AppError from '../../utils/appError.js'
import Item from '../../DAO/models/Item.js'

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
      ? next(err) &&
        res.send((response = { error: `api: ${e}`, response: info(req.user) }))
      : res.send(response)
  }

  static async apiGetItemBySKU(req, res, next) {
    try {
      let sku = req.query.sku || {}
      let item = await ItemsDAO.apiGetItemBySKU(sku)
      if (!item) {
        res.send(
          (response = {
            itemSKU: `${req.query.sku}`,
            error: `No item found with sku: ${req.params}`,
          })
        )
      }

      response.data = item
      res.send(response)
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)
      res.send((response = { data: {}, error: `api: ${e}` }))
    }
  }

  static async apiAddNewItem(req, res) {
    try {
      const item = {
        category: req.body.category,
        itemId: req.body.itemId,
        SKU: req.body.SKU,
        color: req.body.color,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        size: req.body.size,
      }

      const ItemResponse = await ItemsDAO.apiAddNewItem({ item })
      const postedItem = await Item.findOne({ _id: ItemResponse.insertedId })

      res.send({
        status: 'error' in ItemResponse ? 'Fail' : 'Success',
        data: ItemResponse,
        itemSKU: postedItem.SKU,
      })
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)
      res.send({ data: {}, error: `api: ${e}` })
    }
  }

  static async apiUpdateItemBySKU(req, res, next) {
    try {
      const sku = req.query.sku || {}
      const item = {
        category: req.body.category,
        itemId: req.body.itemId,
        SKU: sku,
        color: req.body.color,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        size: req.body.size,
      }

      const ItemResponse = await ItemsDAO.apiUpdateItemBySKU(sku, item)
      res.send({
        status:
          ItemResponse.modifiedCount === 0
            ? 'Update Failed'
            : 'Updated Successfully',
        data: ItemResponse,
        message:
          ItemResponse.matchedCount === 1
            ? `Matched ${ItemResponse.matchedCount} document`
            : `No matches for itemSku: ${sku}`,
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
        status:
          ItemResponse.deletedCount === 0
            ? 'Deletion Failed'
            : 'Deleted Successfully',
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
