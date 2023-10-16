import express, { json } from 'express'
import mongoose from 'mongoose'
import { auth } from './auth.js'

// import UsersController from '../controllers/users.controller.js'
import MessagesController from '../controllers/messages.controller.js'

const router = express.Router()
import passport from 'passport'
const User = mongoose.model('User')

// router.route('/login').get(UsersController.apiGetUsers)
router.get('/', auth.required, (req, res, next) => {
  User.findById(req.payload.id)
    .then((user) => {
      !user ? res.sendStatus(401) : res.json({ user: user.toAuthJSON() })
    })
    .catch(next)
})

router.put('/', auth.required, (req, res, next) => {
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

      return user.save().then(() => {
        return res.json({ user: user.toAuthJSON() })
      })
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  let user = new User()
  user.username = req.body.user.username
  user.email = req.body.user.email
  user.setPassword(req.body.user.password)

  user
    .save()
    .then(() => {
      return res.json({ user: user.toAuthJSON() })
    })
    .catch(next)
})

router.post('/login', (req, res, next) => {
  if (!req.body.user.email) {
    res.status(422).json({ errors: { email: 'cannot be blank' } })
  }
  if (!req.body.user.password) {
    res.status(422).json({ errors: { password: 'cannot be blank' } })
  }

  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) return next(err)
    user
      ? (user.token =
          user.generateJWT() && res.json({ user: user.toAuthJSON() }))
      : res.status(422).json(info)
  })(req, res, next)
})

router
  .route('/message')
  .get(MessagesController.apiGetMessage)
  .post(MessagesController.apiPostMessage)
  .delete(MessagesController.apiDeleteMessage)

export default router
