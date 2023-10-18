import mongoose from 'mongoose'
import fs from 'fs'

const data = JSON.parse(fs.readFileSync('./db/inventory.json', 'utf-8'))
const connectionString = process.env.SUPRIME_DB_URI || ''

let items
async function importData() {
  mongoose.connect(connectionString)
  try {
    await mongoose.connection.model('Item').insertMany(data)
    console.log('Data successfully imported')
    process.exit()
  } catch (error) {
    console.log('error:', error)
  }
}

importData()

export default items
