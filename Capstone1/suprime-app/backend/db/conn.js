import mongoose from 'mongoose'
const connectionString = process.env.SUPRIME_DB_URI || ''

const conn = async () => {
  try {
    const connectDB = await mongoose.connect(connectionString)
    console.log(`MongDB connected: ${connectDB.connection.host}`)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

export default conn
