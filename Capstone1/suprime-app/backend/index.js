import express from 'express'
import cors from 'cors'
import { auth } from 'express-oauth2-jwt-bearer'
import authRouter from './API/routes/auth.js'
import itemsRouter from './API/routes/items.route.js'
import usersRouter from './API/routes/users.route.js'
import conn from './db/conn.js'

const app = express()
const port = process.env.PORT || 4040

const jwtCheck = auth({
  audience: 'https://suprime-api/api/v1',
  issuerBaseURL: 'https://dev-xxofmt70.us.auth0.com/',
  tokenSigningAlg: 'RS256',
})

// enforce on all endpoints
app.use(jwtCheck)

app.get('/authorized', function (req, res) {
  res.send('Secured Resource')
})

app.use(cors())
app.use(express.json())

app.use(expressSession(session))

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
