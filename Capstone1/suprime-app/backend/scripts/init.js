import fs from 'fs'
import db from './conn.js'
import User from '../DAO/models/User.js'

const data = JSON.parse(fs.readFileSync('./db/users.json', 'utf-8'))
const itemData = JSON.parse(fs.readFileSync('./db/inventory.json', 'utf-8'))

;(async function importData() {
  try {
    let users = await User.insertMany(data)
    console.log(users.insertedIds)
    console.log('Data successfully imported')
    process.exit()
  } catch (error) {
    console.log('error:', error)
    process.exit(1)
  }
})()
// ;(async function importData() {
//   let dbo = db.connect(process.env.SUPRIME_DB_URI)
//   try {
//     await dbo.connection.model('Item').insertMany(itemData)
//     console.log('Data successfully imported')
//     process.exit()
//   } catch (error) {
//     console.log('error:', error)
//   }
// })()
