import mongoose from 'mongoose'
class Database {
  constructor() {
    this.connection = null
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  async connect(connectionString) {
    try {
      this.connection = await mongoose.connect(connectionString)
      console.log(`MongDB connected: ${this.connection.connection.host}`)
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  }
}

const db = Database.getInstance()

export default db
