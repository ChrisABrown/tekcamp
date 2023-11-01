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

  static async signUp(user = {}, pw) {
    const { username, email, profile } = user

    try {
      let regUser = await User.register(
        new User({
          username: username,
          email: email,
          profile: profile,
        }),
        pw
      )

      return regUser
    } catch (e) {
      console.error(`unable to register user: ${e}`)
      return { error: e }
    }
  }

  static async refreshToken(userId) {
    try {
      const find = await User.findOne({ userId }).exec()
      return find
    } catch (e) {
      console.error(`Unauthorized Access`)
      return { error: e }
    }
  }
}
