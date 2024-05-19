import OrdersDAO from '../../DAO/ordersDAO.js'
import AppError from '../../utils/appError.js'
import { checkUser } from '../../utils/functions.js'

let err
let response = {}

export default class OrdersController {
  static async apiGetAllOrders(req, res, next) {
    checkUser(req.user)
    if (req.query.user) return next()

    const ordersPerPage = req.query.ordersPerPage
      ? parseInt(req.query.ordersPerPage)
      : 5

    const page = req.query.page ? parseInt(req.query.page) : 0

    let filters = {}

    if (req.query.order_id) {
      filters.order_id = req.query.order_id
    }

    let orderId = req.query.order_id

    const { totalOrders, ordersList } = await OrdersDAO.apiGetAllOrders(
      {
        filters,
        page,
        ordersPerPage,
      },
      orderId
    )
    response = {
      user: req.user._id,
      orders: ordersList,
      filters: filters,
      page: page,
      orders_per_page: ordersPerPage,
      total_orders: totalOrders,
      message: `found ${totalOrders} orders`,
    }

    err = new AppError(response.message, res.status)

    !response
      ? next(err) &&
        res.send(
          (response = { error: `api: ${err}`, response: info(req.user) })
        )
      : res.send(response)
  }

  static async apiGetAllOrdersForSingleUser(req, res, next) {
    const ordersPerPage = req.query.ordersPerPage
      ? parseInt(req.query.ordersPerPage)
      : 5

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

    response = {
      user: req.user._id,
      orders: ordersList,
      filters: filters,
      page: page,
      orders_per_page: ordersPerPage,
      total_orders: totalOrders,
      message: `found ${totalOrders} orders for ${filters.user}`,
    }

    err = new AppError(response.message, res.status)

    !response
      ? next(err) &&
        res.send(
          (response = { error: `api: ${err}`, response: info(req.user) })
        )
      : res.send(response)
  }

  static async apiCreateOrder(req, res, next) {
    try {
      const order = {
        user: req.user._id,
        billing: req.body.billingAddress,
        shipping: req.body.shippingAddress,
        items: req.body.cart.items,
        orderTotal: req.body.cart.total,
      }
      const OrderResponse = await OrdersDAO.apiCreateOrder(order)

      response.data = OrderResponse
      response.message = `processing order...`

      res.send({
        status: response.status,
        data: response.data,
        message: response.message,
        response: info(req.user),
      })
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)
      res.send((response = { error: `api: ${e}`, response: info(req.user) }))
    }
  }

  static async apiDeleteOrder(req, res, next) {
    let orderId = req.query.order_id
    try {
      const OrderResponse = await OrdersDAO.apiDeleteOrder(orderId)

      response.data = OrderResponse
      response.message = `deleted order with id: ${orderId}`

      res.send({
        status: response.status,
        data: response.data,
        message: response.message,
        response: info(req.user),
      })
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)
      res.send((response = { error: `api: ${e}`, response: info(req.user) }))
    }
  }
}
