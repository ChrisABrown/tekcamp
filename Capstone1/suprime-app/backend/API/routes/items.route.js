import { Router as expressRouter } from 'express'
import ItemsController from '../controllers/items.controller.js'
import Auth from '../../authenticate.js'

const itemsRouter = expressRouter()

itemsRouter
  .route('/')
  .get(ItemsController.apiGetItems)
  .get(ItemsController.apiGetItemBySKU)
  .post(ItemsController.apiAddNewItem)
  .put(ItemsController.apiUpdateItemBySKU)
  .delete(ItemsController.apiDeleteItem)

export default itemsRouter
