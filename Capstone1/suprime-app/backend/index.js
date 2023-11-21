import express from 'express'
import cors from 'cors'
import authRouter from './API/routes/auth.route.js.js'
import itemsRouter from './API/routes/items.route.js'
import ordersRouter from './API/routes/orders.route.js'
import messagesRouter from './API/routes/messages.route.js'
import db from './db/db.js'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import './strategies/JwtStrategy.js'
import './strategies/LocalStrategy.js'
import './authenticate.js'
import session from 'express-session'

const app = express()
const origin = process.env.CLIENT_ORIGIN_URL

app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
  })
)

const corsOptions = {
  origin: origin,
  credentials: true,
}

app.use(cors(corsOptions))
app.use(passport.session())
app.use('/api/v1/messages', messagesRouter)
app.use('/api/v1/items', itemsRouter)
app.use('/api/v1/users', authRouter)
app.use('/api/v1/orders', ordersRouter)

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

export default app
