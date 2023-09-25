import { default as mongoose } from 'mongoose'

import { mongodbURI as db } from '../config/keys.js'
import express, { json } from 'express'
import cors from 'cors'
import itemsRouter from './routes/api/items.js'

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(json())
app.use('/api/items', itemsRouter)

mongoose.connect(db, {
  tlsCertificateKeyFile: 'CA.pem',
  dbName: 'Suprime_Site',
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy')
  app.use((req, res, next) => {
    if (req.secure) next()
    else res.redirect(`https://'${req.headers.host}${req.url}`)
  })
}

export const items = connection.collection('Stock')
