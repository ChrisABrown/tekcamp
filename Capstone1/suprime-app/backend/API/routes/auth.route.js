import { Router as expressRouter } from 'express'
import AuthController from '../controllers/auth.controller.js'
import passport from 'passport'
import Auth from '../../authenticate.js'

const authRouter = expressRouter()

authRouter
  .route('/')
  .get(Auth.verifyToken(['admin']), AuthController.apiGetUsersByRole)
  .get(Auth.verifyToken(['employee']))

authRouter
  .route('/user')
  .get(Auth.verifyUser(), AuthController.apiGetUserDetails)
  .put(Auth.verifyUser(), AuthController.apiUpdateUser)

authRouter
  .get('/logout', AuthController.apiLogout)
  .post('/signup', AuthController.apiRegisterNewUser)
  .post('/login', passport.authenticate('local'), AuthController.apiLogin)
  .post('/refreshToken', AuthController.apiRefreshToken)

export default authRouter
