import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../DAO/models/User.js'

passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(
  User.serializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, {
        _id: user._id,
        avatar: user.avatar,
        username: user.username,
        role: user.role,
      })
    })
  })
)
passport.deserializeUser(
  User.deserializeUser((user, cb) => {
    process.nextTick(() => {
      return cb(null, user)
    })
  })
)
