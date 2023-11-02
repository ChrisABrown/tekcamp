import ItemsDAO from '../../DAO/itemsDAO.js'
import AppError from '../../appError.js'
import Item from '../../DAO/models/Item.js'

export default class ItemsController {
  static async apiGetItems(req, res, next) {
    const itemsPerPage = req.query.itemsPerPage
      ? parseInt(req.query.itemsPerPage)
      : 6
    const page = req.query.page ? parseInt(req.query.page) : 0

    let filters = {}
    if (req.query.category) {
      filters.category = req.query.category
    }
    const { totalNumItems, itemsList } = await ItemsDAO.getItems({
      filters,
      page,
      itemsPerPage,
    })

    let response = {
      items: itemsList,
      filters: filters,
      page: page,
      entries_per_page: itemsPerPage,
      total_results: totalNumItems,
    }
    !response
      ? next(new AppError()) && res.json(new AppError('NotFound', 404))
      : res.send(response).status(200)
  }

  static async apiGetItemBySKU(req, res, next) {
    try {
      let sku = req.params.sku || {}
      let item = await ItemsDAO.getItemBySKU(sku)
      if (!item) {
        res.status(404).json({
          itemSKU: `${req.params.sku}`,
          error: 'No Item found with itemSKU',
        })
        return
      }

      let response = {
        data: item,
      }
      res.json(response)
    } catch (e) {
      let err = new AppError(e.message, res.status)
      next(err)
      res.json((response = { data: {}, error: e, message: `api: ${e}` }))
    }
  }

  static async apiPostItem(req, res) {
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

      const ItemResponse = await ItemsDAO.postNewItem({ item })
      const postedItem = await Item.findOne({ _id: ItemResponse.insertedId })

      res.json({
        status: 'error' in ItemResponse ? 'Fail' : 'Success',
        data: ItemResponse,
        itemSku: postedItem.SKU,
      })
    } catch (e) {
      let err = new AppError(e.message, res.status)
      next(err)
      res.json({ data: {}, error: e, message: `api: ${e}` })
    }
  }

  static async apiUpdateItemBySKU(req, res, next) {
    try {
      const sku = req.params.sku || {}
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

      const ItemResponse = await ItemsDAO.updateItemBySKU(sku, item)
      res.json({
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
      let err = new AppError(e.message, res.status)
      next(err)
      res.json({ data: {}, error: e, message: `api: ${e}` })
    }
  }

  static async apiDeleteItem(req, res, next) {
    try {
      const sku = req.params.sku || {}
      const ItemResponse = await ItemsDAO.deleteItem(sku)
      res.json({
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
      let err = new AppError(e.message, res.status)
      next(err)
      res.json({ data: {}, error: e, message: `api: ${e}` })
    }
  }
}
