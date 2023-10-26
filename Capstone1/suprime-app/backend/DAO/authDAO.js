import User from './models/User.js'

export default class AuthDAO {
  static async logIn(user = {}) {
    try {
      return await User.findById(user._id)
    } catch (e) {
      console.error(`unable to find user: ${e}`)
      return { error: e }
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
