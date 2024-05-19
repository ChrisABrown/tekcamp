import app from './index.js'

const PORT = process.env.PORT
const baseURL = `http://localhost:${PORT}`

app.listen(PORT, () => {
  console.log(`listening on ${baseURL}`)
})
