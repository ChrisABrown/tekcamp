import passport from 'passport'
import { JwtStrategy, ExtractJwt } from 'passport-jwt'
import User from '../DAO/models/User'

const options = {}

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secret = process.env.JWT_SECRET

passport.use(
  User.createStrategy(
    new JwtStrategy(options, function (jwt_payload, done) {
      User.findOne({ _id: jwt_payload._id }, function (err, user) {
        if (err) {
          return done(err, false)
        }
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
    })
  )
)
