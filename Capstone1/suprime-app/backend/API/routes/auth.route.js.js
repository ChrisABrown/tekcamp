import { Router as expressRouter } from 'express'
import AuthController from '../controllers/auth.controller.js'
import passport from 'passport'
import Auth from '../../authenticate.js'

const authRouter = expressRouter()

authRouter
  .get(
    '/admin-dashboard',
    Auth.verifyToken(['admin']),
    AuthController.apiGetAllUsers
  )
  .get('/employee-dashboard', Auth.verifyToken(['employee', 'admin']))
  .get('/user', Auth.verifyUser, AuthController.apiGetUserDetails)
  .get('/logout', AuthController.apiLogout)
  .put('/user', Auth.verifyUser, AuthController.apiUpdateUser)
  .post('/signup', AuthController.apiRegisterNewUser)
  .post('/login', passport.authenticate('local'), AuthController.apiLogin)
  .post('/refreshToken', AuthController.apiRefreshToken)

export default authRouter
