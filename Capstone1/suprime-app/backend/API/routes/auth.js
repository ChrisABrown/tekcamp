import { Router as expressRouter } from 'express'
import AuthController from '../controllers/auth.controller.js'
import passport from 'passport'
import Auth from '../../authenticate.js'

const authRouter = expressRouter()

// enforce on all endpoints

authRouter
  .get(
    '/authorized',
    passport.authenticate('local'),
    //TODO
    function (req, res) {
      res.send('Secured Resource')
    }
  )
  .get(
    '/admin-dashboard',
    Auth.verifyToken(['admin']),
    AuthController.getAllUsers
  )
  .get('/user', Auth.verifyUser, AuthController.getUserDetails)
  .get('/logout', Auth.verifyUser, AuthController.logOut)
  .put('/user', AuthController.updateUser)
  .post('/login', passport.authenticate('local'), AuthController.logIn)
  .post('/signup', AuthController.signUp)
  .post('/refreshToken', AuthController.refreshToken)

//   .put(
//     '/user',

//
//   )

// expressRouter
//   .route('/message')
//   .get(MessagesController.apiGetMessage)
//   .post(MessagesController.apiPostMessage)
//   .delete(MessagesController.apiDeleteMessage)

export default authRouter
