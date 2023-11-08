import { Router as expressRouter } from 'express'
import AuthController from '../controllers/auth.controller.js'
import passport from 'passport'
import Auth from '../../authenticate.js'

const authRouter = expressRouter()

// enforce on all endpoints

authRouter
  .get(
    '/admin-dashboard',
    Auth.verifyToken(['admin']),
    AuthController.getAllUsers
  )
  .get('/employee-dashboard', Auth.verifyToken(['employee', 'admin']))
  .get('/user', Auth.verifyUser, AuthController.getUserDetails)
  .get('/logout', Auth.verifyUser, AuthController.logOut)
  .put('/user', Auth.verifyUser, AuthController.updateUser)
  .post('/login', passport.authenticate('local'), AuthController.logIn)
  .post('/signup', AuthController.signUp)
  .post('/refreshToken', AuthController.refreshToken)

// expressRouter
//   .route('/message')
//   .get(MessagesController.apiGetMessage)
//   .post(MessagesController.apiPostMessage)
//   .delete(MessagesController.apiDeleteMessage)

export default authRouter
