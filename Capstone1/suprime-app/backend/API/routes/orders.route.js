import { Router as expressRouter } from 'express'
import OrdersController from '../controllers/orders.controller.js'
import Auth from '../../authenticate.js'

const ordersRouter = expressRouter()

ordersRouter
  .route('/')
  .get(
    Auth.verifyToken(['admin', 'employee']),
    OrdersController.apiGetAllOrders
  )
  .get(
    Auth.verifyToken(['admin', 'employee', 'user']),
    OrdersController.apiGetAllOrdersForSingleUser
  )
  .post(OrdersController.apiCreateOrder)
  .delete(
    Auth.verifyToken(['admin', 'employee']),
    OrdersController.apiDeleteOrder
  )

export default ordersRouter
