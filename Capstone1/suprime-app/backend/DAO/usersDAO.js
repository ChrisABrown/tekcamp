import User from './models/User'

let users

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) return

    try {
      items = await conn.db(process.env.SUPRIME_DB_NS).collection('Users')
    } catch (e) {
      console.error(`unable to connect in UsersDAO: ${e}`)
    }
  }

  static async signUp(user = {}) {
    try {
      user = new User({
        username: user.username,
        email: user.email,
        role: user.role,
        password: user.password,
      })

      return await User.create(user)
    } catch (e) {
      console.error(`unable to register user: ${e}`)
      return { error: e }
    }
  }
}
