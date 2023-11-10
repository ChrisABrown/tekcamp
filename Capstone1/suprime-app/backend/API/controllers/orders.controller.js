import OrdersDAO from '../../DAO/ordersDAO'
import AppError from '../../appError'

export default class OrdersController {
  static async apiGetAllOrders(req, res, next) {
    let response = {
      data: [],
      success: res.status,
    }
    try {
      const ordersList = await OrdersDAO.apiGetAllOrders()

      response.data = ordersList
      res.send(response)
    } catch (e) {
      let err = new AppError(e.message, res.status)

      next(err)
      res.json((response = { data: {}, error: e, message: `api: ${e}` }))
    }
  }

  static async apiGetAllOrdersForSingleUser(req, res, next) {
    const ordersPerPage = req.query.ordersPerPage ? parseInt(ordersPerPage) : 5

    const page = req.query.page ? parseInt(req.query.page) : 0

    let filters = {}

    if (req.query.user) {
      filters.user = req.query.user
    }

    let response = {
      user: req.user._id,
      orders: ordersList,
      filters: filters,
      page: page,
      orders_per_page: ordersPerPage,
      total_orders: totalOrders,
      message: '',
    }
    const { totalOrders, ordersList } =
      await OrdersDAO.apiGetAllOrdersForSingleUser({
        filters,
        page,
        ordersPerPage,
      })
    let err = new AppError('Must be logged in to access', 404)

    !response ? next(err) : res.send(response)
  }

  static async apiCreateOrder(req, res, next) {
    if (!req.user) {
      res.json({
        message: 'user must be logged in to complete order',
        status: res.status,
      })
    }
    let response
    try {
      const order = {
        user: req.user._id,
        billing: req.body.billing,
        shipping: req.body.shipping,
        items: req.body.cart,
        orderTotal: req.body.cart.total,
      }
      const OrderResponse = await OrdersDAO.apiCreateOrder({ order }).then(
        (order) => {
          response = {
            status: res.status,
            data: OrderResponse,
            order: order.insertedId,
          }
        }
      )
      res.json(response)
    } catch (e) {
      let err = new AppError(e.message, res.status)
      next(err)
      res.json((response = { data: {}, error: e, message: `api: ${e}` }))
    }
  }
}
