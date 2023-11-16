import { Router as expressRouter } from 'express'
import ItemsController from '../controllers/items.controller.js'
import Auth from '../../authenticate.js'

const itemsRouter = expressRouter()

itemsRouter
  .route('/')
  .get(ItemsController.apiGetItems)
  .get(ItemsController.apiGetItemBySKU)
  .post(Auth.verifyToken(['admin', 'employee']), ItemsController.apiAddNewItem)
  .put(
    Auth.verifyToken(['admin', 'employee']),
    ItemsController.apiUpdateItemBySKU
  )
  .delete(
    Auth.verifyToken(['admin', 'employee']),
    ItemsController.apiDeleteItem
  )

export default itemsRouter
