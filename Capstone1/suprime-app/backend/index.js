import express from 'express'
import cors from 'cors'
import authRouter from './API/routes/auth.js'
import itemsRouter from './API/routes/items.route.js'
import usersRouter from './API/routes/users.route.js'
import conn from './db/conn.js'

if (!process.env.ISSUER_BASE_URL || !process.env.AUTH0_AUDIENCE) {
  throw 'Missing required environment variables. Check docs for more info.'
}

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/api/v1/items', itemsRouter)
app.use('/api/v1/auth', authRouter)
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

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
