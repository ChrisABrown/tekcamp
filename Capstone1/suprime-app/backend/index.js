import express from 'express'
import cors from 'cors'
import expressSession from 'express-session'
import Auth0Strategy from 'passport-auth0'
import passport from 'passport'
import authRouter from './API/routes/auth.js'
import itemsRouter from './API/routes/items.route.js'
import usersRouter from './API/routes/users.route.js'
import conn from './db/conn.js'

const app = express()
const port = process.env.PORT || 4040

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
}

if (app.get('env') === 'production') {
  session.cookie.secure = true
}

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL,
  },

  function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile)
  }
)

app.use(cors())
app.use(express.json())

app.use(expressSession(session))

passport.use(strategy)
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  next()
})
app.use('/', authRouter)
app.use('/api/v1/items', itemsRouter)
app.use('/api/v1/users', usersRouter)
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' })
})
app.use((err, _req, res, next) => {
  err.status = err.status || 'fail'
  err.statusCode = err.statusCode || 500

  err.name === 'ValidatorError'
    ? res.status(422).json({
        errors: Object.keys(err.errors).reduce((errors, key) => {
          errors[key] = err.errors[key].message

          return errors
        }, {}),
      })
    : next(err)
})

conn()

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
