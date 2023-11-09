import { Router as expressRouter } from 'express'
import Auth from '../../authenticate'
import MessagesController from '../controllers/messages.controller'
import passport from 'passport'

const messagesRouter = expressRouter()

messagesRouter
  .get('/', Auth.verifyToken(['admin']), MessagesController.apiGetMessage)
  .post('/', passport.authenticate('local'), MessagesController.apiPostMessage)
  .delete('/', Auth.verifyToken(['admin']), MessagesController.apiDeleteMessage)
