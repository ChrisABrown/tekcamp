const { default: mongoose } = require('mongoose')

const db = require('../config/keys').mongodbURI

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DBerror', err))

const port = process.env.PORT || 3030

app.listen()
