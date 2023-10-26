import passport from 'passport'
import { LocalStrategy } from 'passport-local'
import User from '../DAO/models/User'

passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
