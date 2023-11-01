import { Router as expressRouter } from 'express'
import User from '../../DAO/models/User.js'
import AuthController from '../controllers/auth.controller.js'
import passport from 'passport'
import jwt from 'jsonwebtoken'

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
  .post('/login', passport.authenticate('local'), AuthController.logIn)
  .post('/signup', AuthController.signUp)
  .post('/refreshToken', (req, res, next) => {
    const { signedCookies = {} } = req
    const { refreshTokens } = signedCookies
    let payload

    if (refreshTokens) {
      try {
        refreshTokens.forEach((refreshToken) => {
          console.log(refreshToken)
          // payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        })
        const userId = payload._id
        // const findUser = await AuthDAO.refreshToken(userId)

        // findUser()

        User.findOne({ _id: userId }).then(
          (user) => {
            if (user) {
              const tokenIndex = user.refreshToken.findIndex(
                (item) => item.refreshToken === refreshToken
              )
              if (tokenIndex === -1) {
                res.statusCode = 401
                res.send('Unauthorized')
              } else {
                const token = Auth.getToken({ _id: userId })
                const newRefreshToken = Auth.getRefreshToken({ _id: userId })
                user.refreshToken[tokenIndex] = {
                  refreshToken: newRefreshToken,
                }
                user.save().then((err, user) => {
                  if (err) {
                    res.status = 500
                    res.send(err)
                  } else {
                    res.cookie(
                      'refreshToken',
                      newRefreshToken,
                      Auth.COOKIE_OPTIONS
                    )
                    res.send({ success: true, token })
                  }
                })
              }
            } else {
              res.statusCode = 401
              res.send('Unauthorized')
            }
          },
          (err) => next(err)
        )
      } catch (err) {
        res.statusCode = 401
        res.send(`Error: ${err}`)
      }
    } else {
      res.statusCode = 401
      res.send('Unauthorized')
    }
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
