import { Router as expressRouter } from 'express'
import User from '../../DAO/models/User.js'
import AuthController from '../controllers/auth.controller.js'
import passport from 'passport'
import OpenIDConnectStrategy from 'passport-openidconnect'

passport.use(
  new OpenIDConnectStrategy(
    {
      issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      authorizationURL: `https://${process.env.AUTH0_DOMAIN}/authorize`,
      tokenURL: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
      userInfoURL: `https://${process.env.AUTH0_DOMAIN}/userinfo`,
      clientID: `https://${process.env.AUTH0_CLIENT_ID}/`,
      clientSecret: `https://${process.env.AUTH0_CLIENT_SECRET}/`,
      callbackURL: '/oauth2/redirect',
      scope: ['profile'],
    },
    function verify(issuer, profile, cb) {
      return cb(null, profile)
    }
  )
)

const authRouter = expressRouter()

// enforce on all endpoints

authRouter.get('/authorized', function (req, res) {
  res.send('Secured Resource')
})

authRouter.get(
  '/users',

  function (req, res, next) {
    User.find({})
      .then((users) => {
        res.send({ userList: users })
      })
      .catch(next)
  }
)

authRouter
  .get('/:id', (req, res, next) => {
    User.findById(req.payload.id)
      .then((user) => {
        res.send({ user: user })
      })
      .catch(next)
  })
  .put(
    '/user',

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

// authRouter
//   .post('/authorize', AuthController.signUp)
//   .post('/login', AuthController.logIn)

// expressRouter
//   .route('/message')
//   .get(MessagesController.apiGetMessage)
//   .post(MessagesController.apiPostMessage)
//   .delete(MessagesController.apiDeleteMessage)

export default authRouter
