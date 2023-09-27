import express from 'express'
import UsersController from '../controllers/users.controller.js'
import MessagesController from './messages.controller.js'

const router = express.Router()

router.route('/').get(UsersController.apiGetUsers)

router
  .route('/message')
  .get(MessagesController.apiGetMessages)
  .post(MessagesController.apiPostMessage)
  .delete(MessagesController.apiDeleteMessage)

export default router
