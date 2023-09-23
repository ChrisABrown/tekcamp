const { default: mongoose } = require('mongoose')

const db = require('../config/keys').mongodbURI
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsCertificateKeyFile: 'CA.pem',
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
