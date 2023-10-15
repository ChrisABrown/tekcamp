import express from 'express'
import passport from 'passport'
import mongoose from 'mongoose'
import {auth} from './auth'

// import UsersController from '../controllers/users.controller.js'
import MessagesController from '../controllers/messages.controller.js'
const router = express.Router()
const User = mongoose.model('User')

// router.route('/login').get(UsersController.apiGetUsers)
router.get('/user', auth.required, (req, res, next) => {
  User.findById(req.payload.id)
    .then((user) => {
      !user ? res.sendStatus(401) : res.json({ user: user.toAuthJSON() })
    })
    .catch(next)
})

router.put('/user', auth.)

router.post('/users', (req, res, next) => {
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

router.post('/users/login', (req, res, next) => {
  if (!res.body.user.email) {
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
