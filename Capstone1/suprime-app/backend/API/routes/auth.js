import { Router as expressRouter } from 'express'
import AuthController, { verifyToken } from '../controllers/auth.controller.js'
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
  .get('/admin-dashboard', verifyToken(['admin']), AuthController.getAllUsers)
  .get('/user', Auth.verifyUser, AuthController.getUserDetails)
  .get('/logout', Auth.verifyUser, AuthController.logOut)
  .post('/login', passport.authenticate('local'), AuthController.logIn)
  .post('/signup', AuthController.signUp)
  .post('/refreshToken', AuthController.refreshToken)

//   .put(
//     '/user',

//     (req, res, next) => {
//       User.findById(req.payload.id)
//         .then((user) => {
//           let updatedUser = req.body.user
//           if (!user) return res.sendStatus(401)
//           if (typeof updatedUser.username !== 'undefined') {
//             user.username = updatedUser.username
//           } else if (typeof updatedUser.email !== 'undefined') {
//             user.email = updatedUser.email
//           } else if (typeof updatedUser.bio !== 'undefined') {
//             user.bio = updatedUser.bio
//           } else if (typeof updatedUser.image !== 'undefined') {
//             user.image = updatedUser.image
//           } else if (typeof updatedUser.password !== 'undefined') {
//             user.setPassword(updatedUser.password)
//           }

//           return user.save().then((user) => {
//             return res.json({ user: user })
//           })
//         })
//         .catch(next)
//     }
//   )

// expressRouter
//   .route('/message')
//   .get(MessagesController.apiGetMessage)
//   .post(MessagesController.apiPostMessage)
//   .delete(MessagesController.apiDeleteMessage)

export default authRouter
