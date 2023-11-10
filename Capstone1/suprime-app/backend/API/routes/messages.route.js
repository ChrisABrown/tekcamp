import { Router as expressRouter } from 'express'
import MessagesController from '../controllers/messages.controller.js'
import Auth from '../../authenticate.js'
import passport from 'passport'

const messagesRouter = expressRouter()

messagesRouter
  .route('/')
  .get(Auth.verifyToken(['admin']), MessagesController.apiGetMessage)
  .post(MessagesController.apiPostMessage)
  .delete(Auth.verifyToken(['admin']), MessagesController.apiDeleteMessage)

export default messagesRouter
