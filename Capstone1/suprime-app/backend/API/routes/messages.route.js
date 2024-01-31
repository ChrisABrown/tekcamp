import { Router as expressRouter } from 'express'
import MessagesController from '../controllers/messages.controller.js'
import Auth from '../../authenticate.js'

const messagesRouter = expressRouter()

messagesRouter
  .route('/')
  .get(
    Auth.verifyToken(['admin', 'employee']),
    MessagesController.apiGetMessage
  )
  .post(Auth.verifyUser(), MessagesController.apiPostMessage)
  .delete(
    Auth.verifyToken(['admin', 'employee']),
    MessagesController.apiDeleteMessage
  )

export default messagesRouter
