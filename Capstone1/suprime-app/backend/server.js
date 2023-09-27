import express from 'express'
import cors from 'cors'
import router from './API/routes/items.route.js'
import router2 from './API/routes/users.route.js'

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

export default app
