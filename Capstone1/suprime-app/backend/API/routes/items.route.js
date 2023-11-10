import { Router as expressRouter } from 'express'
import ItemsController from '../controllers/items.controller.js'

const itemsRouter = expressRouter()
const endpoints = ['/', '/sku/:sku']

itemsRouter
  .get(endpoints[0], ItemsController.apiGetItems)
  .get(endpoints[1], ItemsController.apiGetItemBySKU)
  .post(endpoints[0], ItemsController.apiAddNewItem)
  .put(endpoints[1], ItemsController.apiUpdateItemBySKU)
  .delete(endpoints[1], ItemsController.apiDeleteItem)

export default itemsRouter
