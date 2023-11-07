import passport from 'passport'
import User from '../DAO/models/User.js'

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
