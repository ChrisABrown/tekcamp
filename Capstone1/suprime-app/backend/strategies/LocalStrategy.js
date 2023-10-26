import passport from 'passport'
import { LocalStrategy } from 'passport-local'
import User from '../DAO/models/User'

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
