import mongoose from 'mongoose'
let connection
const uri = process.env.SUPRIME_DB_URI

export const init = () => {
  connection = mongoose.connect(uri)
  let db = mongoose.connection
  db.dropDatabase()
}

export const closeDB = async () => {
  let db = mongoose.connection

  await db.dropDatabase()
  await db.close()
}
