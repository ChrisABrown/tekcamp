import MongoClient from 'mongodb'
import express from 'express'
import cors from 'cors'
import { mongodbURI as uri } from '../config/keys.js'
import pkg from './routes/api/items.js'

const { router: itemsRouter } = pkg
const app = express()
const port = process.env.PORT || 4000

const cert = 'CA.pem'
const client = new MongoClient(uri, { tlsCertificateKeyFile: cert })

let conn

try {
  conn = await client.connect((uri, 'MONGODB-X509'))
} catch (e) {
  console.error(e)
}

let db = conn.db('Suprime_Site')

app.use(cors())
app.use(express.json())
app.use('/api/items', async (req, res, next) => {
  let coll = await db.collection('Stock')
  let items = coll.find()

  res.send(items).status(200)
  next('router')
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

export default db
