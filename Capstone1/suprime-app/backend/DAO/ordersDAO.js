import Order from './models/Order.js'
import User from './models/User.js'

export default class OrdersDAO {
  static async apiGetAllOrders() {
    try {
      const ordersList = await Order.find({}).exec()

      return ordersList
    } catch (err) {
      console.error('unable to issued find command')
      return { error: err }
    }
  }

  static async apiGetAllOrdersForSingleUser({
    filters = null,
    page = 0,
    ordersPerPage = 5,
  } = {}) {
    let query

    if (filters) {
      if ('user' in filters) {
        query = {
          user: {
            $eq: filters['user'],
          },
        }
      }
    }

    let ordersList

    try {
      ordersList = await Order.find(query).limit(ordersPerPage)
      const totalOrders = await Order.countDocuments(query)
      return { totalOrders, ordersList }
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { ordersList: [], totalOrders: 0 }
    }
  }

  static async apiCreateOrder({ order }) {
    try {
      order = new Order({
        user: order.user,
        billing: order.billing,
        shipping: order.shipping,
        items: order.items,
        orderTotal: order.orderTotal,
      })

      return await Order.insertMany(order)
    } catch (e) {
      return { error: e, message: `unable to create order: ${e}` }
    }
  }
}
