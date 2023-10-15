import User from './models/User.cjs'
import mongodb from 'mongodb'

let users

export default class UsersDAO {
  static async injectDB(conn) {
    if (messages) return

    try {
      messages = await conn.db(process.env.SUPRIME_DB_NS).collection('Messages')
    } catch (e) {
      console.error(
        `unable to establish connection handle in MessagesDAO: ${e}`
      )
    }
  }
}
