import Order from './models/Order.js'
import User from './models/User.js'

export default class OrdersDAO {
  static async apiGetAllOrders({
    filters = null,
    page = 0,
    ordersPerPage = 5,
  } = {}) {
    let query

    if (filters) {
      if ('order_id' in filters) {
        query = {
          order_id: {
            $eq: filters['order_id'],
          },
        }
      }
    }
    try {
      const ordersList = await Order.find(query).limit(ordersPerPage)
      const totalOrders = await Order.countDocuments({}).exec()

      return { totalOrders, ordersList }
    } catch (e) {
      console.error('unable to issued find command')
      return { error: e }
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

    try {
      const ordersList = await Order.find(query).limit(ordersPerPage)
      const totalOrders = await Order.countDocuments(query)
      return { totalOrders, ordersList }
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { ordersList: [], totalOrders: 0 }
    }
  }

  static async apiCreateOrder(order) {
    try {
      order = new Order({
        user: order.user,
        billingAddress: order.billing,
        shippingAddress: order.shipping,
        items: order.items,
        orderTotal: order.orderTotal,
      })
      let query = { _id: order.user }

      let user = await User.findOne(query)
      user = user.toJSON()

      if ('orderList' in user) {
        user.orderList.push(order)
      }

      const createdOrder = await User.updateOne(
        query,
        {
          orderList: [...user.orderList],
        },
        {
          new: true,
        }
      )

      await Order.create(order)

      return createdOrder
    } catch (e) {
      return { error: e, message: `unable to create order: ${e}` }
    }
  }

  static async apiDeleteOrder(orderId) {
    try {
      let filter = { 'orderList._id': orderId }

      return await User.findOne(filter).then((user) => {
        let orderList = user.orderList
        const orderIndex = user.orderList.findIndex(
          (item) => item._id.toString() === orderId
        )
        if (orderIndex === -1) return { message: 'orderId not found' }
        const orderToBeDeleted = orderList[orderIndex]._id.toString()
        if (orderToBeDeleted === orderId) {
          orderList.pull(orderList[orderIndex])
          user.save()
          Order.findOneAndDelete({ _id: orderId }).exec()
          return orderList
        }
        return { message: 'unable to find order to delete' }
      })
    } catch (e) {
      return { error: e, message: `unable to delete order: ${e}` }
    }
  }
}
