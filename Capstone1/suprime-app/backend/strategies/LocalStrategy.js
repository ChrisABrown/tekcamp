import passport from 'passport'
import { LocalStrategy } from 'passport-local'
import User from '../DAO/models/User'

passport.use(User.createStrategy('local'))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
