import express from 'express'
import cors from 'cors'
import router from './API/items.route.js'

const app = express()
const itemsRouter = router

app.use(cors())
app.use(express.json())
app.use('/api/v1/items', itemsRouter)
app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' })
})

export default app
