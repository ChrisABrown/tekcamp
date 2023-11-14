import OrdersDAO from '../../DAO/ordersDAO.js'
import AppError from '../../appError.js'

const checkUser = async (user) => {
  let response = {
    message: '',
    status: 0,
  }
  if (!user) {
    response.message = 'Must be logged in to continue'
    response.status = 401
    return response
  }
}

export default class OrdersController {
  static async apiGetAllOrders(req, res, next) {
    checkUser(req.user)
    if (req.query.user) return next()

    let response = {
      success: null,
      status: null,
      data: null,
      message: '',
    }

    try {
      const ordersList = await OrdersDAO.apiGetAllOrders()

      response.success = res.status
      response.data = ordersList
      response.message = `found orders`
      res.send(response)
    } catch (e) {
      let err = new AppError(e.message, res.status)

      next(err)
      res.json((response = { error: e, message: `api: ${e}` }))
    }
  }

  static async apiGetAllOrdersForSingleUser(req, res, next) {
    const ordersPerPage = req.query.ordersPerPage ? parseInt(ordersPerPage) : 5

    const page = req.query.page ? parseInt(req.query.page) : 0

    let filters = {}

    if (req.query.user) {
      filters.user = req.query.user
    }
    const { totalOrders, ordersList } =
      await OrdersDAO.apiGetAllOrdersForSingleUser({
        filters,
        page,
        ordersPerPage,
      })

    let response = {
      user: req.user._id,
      orders: ordersList,
      filters: filters,
      page: page,
      orders_per_page: ordersPerPage,
      total_orders: totalOrders,
      message: '',
    }
    let err = new AppError('Must be logged in to access', 404)

    !response ? next(err) : res.send(response)
  }

  static async apiCreateOrder(req, res, next) {
    const info = await checkUser(req.user).then((result) => {
      return result
    })

    let response
    try {
      const order = {
        user: req.user._id,
        billing: req.body.billingAddress,
        shipping: req.body.shippingAddress,
        items: req.body.cart.items,
        orderTotal: req.body.cart.total,
      }
      const OrderResponse = await OrdersDAO.apiCreateOrder(order)

      res.json(OrderResponse)
    } catch (e) {
      let err = new AppError(e.message, res.status)
      next(err)
      res.json((response = { error: `api: ${e}`, response: info }))
    }
  }

  static async apiDeleteOrder(req, res, next) {
    const info = await checkUser(req.user).then((result) => {
      return result
    })

    let response

    let orderId = req.query.order_id
    try {
      const OrderResponse = await OrdersDAO.apiDeleteOrder(orderId)

      let response = {
        orderId: orderId,
        info: OrderResponse,
      }
      res.send(response)
    } catch (e) {
      let err = new AppError(e.message, res.status)
      next(err)
      res.json((response = { error: `api: ${e}`, response: info }))
    }
  }
}
