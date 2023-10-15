import express from 'express'
// import UsersController from '../controllers/users.controller.js'
import MessagesController from '../controllers/messages.controller.js'

const router = express.Router()

// router.route('/login').get(UsersController.apiGetUsers)

router
  .route('/message')
  .get(MessagesController.apiGetMessage)
  .post(MessagesController.apiPostMessage)
  .delete(MessagesController.apiDeleteMessage)

export default router
