import express from 'express'
import OrdersController from '../controllers/orders.controller.js'

const router = express.Router()

router.route('/').get(OrdersController.apiGetOrders)
