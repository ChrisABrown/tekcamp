import express from 'express'
import authRouter from './API/routes/auth.js'
import itemsRouter from './API/routes/items.route.js'
import db from './db/db.js'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import './strategies/JwtStrategy.js'
import './strategies/LocalStrategy.js'
import './authenticate.js'
import session from 'express-session'

const app = express()
const PORT = process.env.PORT
const baseURL = `http://localhost:${PORT}`

app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
)

app.use(passport.session())
app.use('/api/v1/items', itemsRouter)
app.use('/api/v1/users', authRouter)

app.use('*', (err, _req, res, next) => {
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
db.connect(process.env.SUPRIME_DB_URI)

app.listen(PORT, () => {
  console.log(`listening on ${baseURL}`)
})
