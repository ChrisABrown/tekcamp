import ItemsDAO from '../DAO/itemsDAO.js'

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
}
