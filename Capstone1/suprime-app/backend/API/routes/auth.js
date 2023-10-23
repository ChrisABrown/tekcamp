import { Router as expressRouter } from 'express'
import User from '../../DAO/models/User.js'
import AuthController from '../controllers/auth.controller.js'

const authRouter = expressRouter()

// enforce on all endpoints

authRouter.get('/authorized', validateAccessToken, function (req, res) {
  res.send('Secured Resource')
})

authRouter.get(
  '/users',
  validateAccessToken,
  requiredScopes('read: user'),
  function (req, res, next) {
    User.find({})
      .then((users) => {
        res.send({ userList: users })
      })
      .catch(next)
  }
)

authRouter
  .get('/user', validateAccessToken, (req, res, next) => {
    User.findById(req.payload.id)
      .then((user) => {
        res.send({ user: user })
      })
      .catch(next)
  })
  .put(
    '/user',
    validateAccessToken,
    requiredScopes('update:user'),
    (req, res, next) => {
      User.findById(req.payload.id)
        .then((user) => {
          let updatedUser = req.body.user
          if (!user) return res.sendStatus(401)
          if (typeof updatedUser.username !== 'undefined') {
            user.username = updatedUser.username
          } else if (typeof updatedUser.email !== 'undefined') {
            user.email = updatedUser.email
          } else if (typeof updatedUser.bio !== 'undefined') {
            user.bio = updatedUser.bio
          } else if (typeof updatedUser.image !== 'undefined') {
            user.image = updatedUser.image
          } else if (typeof updatedUser.password !== 'undefined') {
            user.setPassword(updatedUser.password)
          }

          return user.save().then((user) => {
            return res.json({ user: user })
          })
        })
        .catch(next)
    }
  )

authRouter.post('/register', AuthController.signUp)
authRouter.post('/login', (req, res, next) => {
  if (!req.body.user.email) {
    res.status(422).json({ errors: { email: 'cannot be blank' } })
  }
  if (!req.body.user.password) {
    res.status(422).json({ errors: { password: 'cannot be blank' } })
  }
})

// expressRouter
//   .route('/message')
//   .get(MessagesController.apiGetMessage)
//   .post(MessagesController.apiPostMessage)
//   .delete(MessagesController.apiDeleteMessage)

export default authRouter
