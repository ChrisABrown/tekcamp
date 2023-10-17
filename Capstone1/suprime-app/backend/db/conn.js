import { MongoClient } from 'mongodb'

const connectionString = process.env.SUPRIME_DB_URI || ''

const client = new MongoClient(connectionString, {
  monitorCommands: true,
})

let conn
try {
  conn = await client.connect()
} catch (e) {
  console.error(e)
}

let db = conn.db(process.env.SUPRIME_DB_NS)

export default db
