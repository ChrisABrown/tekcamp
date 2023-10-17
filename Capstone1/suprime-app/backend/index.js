import express from 'express'
import cors from 'cors'
import './config/passport.js'
import router from './API/routes/items.route.js'
import router2 from './API/routes/users.route.js'
import pkg from 'express-openid-connect'
const { auth, requiresAuth } = pkg

const port = process.env.PORT || 4040
const app = express()
const itemsRouter = router
const usersRouter = router2

app.use(cors())
app.use(express.json())
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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
