import User from './models/User.js'

export default class AuthDAO {
  static async signUp(user = {}, pw) {
    try {
      let regUser = await User.register(
        new User({
          username: user.username,
          role: user.role,
          email: user.email,
          profile: user.profile,
        }),
        pw
      )
      return regUser
    } catch (e) {
      console.error(`unable to register user: ${e}`)
      return { error: e }
    }
  }

  static async getAllUsers() {
    try {
      const users = await User.find({}).exec()
      return users
    } catch (e) {
      console.error(`unable to retrieve users`)
      return { error: e }
    }
  }

  static async findUser(userId) {
    try {
      const find = await User.findOne({ _id: userId }).exec()
      return find
    } catch (e) {
      console.error(`Unauthorized Access`)
      return { error: e }
    }
  }

  static async updateUser(user = {}, update = {}) {
    try {
      const upUser = await User.findByIdAndUpdate({ _id: user._id }, update, {
        new: true,
      })
      return upUser
    } catch (e) {
      console.error('Unable to update user info')
      return { error: e }
    }
  }

  static async deleteUser(userId) {
    try {
      const user = await User.findOneAndDelete({ _id: userId }).exec()
      return user
    } catch (e) {
      console.error(`unable to delete user: ${e}`)
      return { error: e }
    }
  }
}
