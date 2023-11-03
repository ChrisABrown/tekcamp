import fs from 'fs'
import db from './conn.js'

const itemData = JSON.parse(fs.readFileSync('./db/inventory.json', 'utf-8'))

;(async function importData() {
  let dbo = db.connect(process.env.SUPRIME_DB_URI)
  try {
    await dbo.connection.model('Item').insertMany(itemData)
    console.log('Data successfully imported')
    process.exit()
  } catch (error) {
    console.log('error:', error)
  }
})()
