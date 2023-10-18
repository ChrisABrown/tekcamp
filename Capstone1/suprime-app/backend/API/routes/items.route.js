import { Router as expressRouter } from 'express'
import ItemsController from '../controllers/items.controller.js'

const router = expressRouter()
const endpoints = ['/', '/sku/:sku']

router
  .get(endpoints[0], ItemsController.apiGetItems)
  .get(endpoints[1], ItemsController.apiGetItemBySKU)
  .post(endpoints[0], ItemsController.apiPostItem)
  .put(endpoints[1], ItemsController.apiUpdateItemBySKU)
  .delete(endpoints[1], ItemsController.apiDeleteItem)

export default router
