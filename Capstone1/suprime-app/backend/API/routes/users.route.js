import express from 'express'
import UsersController from '../controllers/users.controller.js'
import MessagesController from './messages.controller.js'

const router = express.Router()

router.route('/').get(UsersController.apiGetUsers)

router
  .route('/message')
  .post(MessagesController.apiPostMessage)
  .put(MessagesController.apiUpdateMessage)
  .delete(MessagesController.apiDeleteMessage)

export default router
