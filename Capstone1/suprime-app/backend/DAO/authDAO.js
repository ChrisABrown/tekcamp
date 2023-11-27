import User from './models/User.js'

export default class AuthDAO {
  static async apiRegisterNewUser(user = {}, pw) {
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
      User.countDocuments({ _id: regUser._id }).then((err, count) => {
        err = new Error()
        if (count !== 1) return err
      })
      return regUser
    } catch (e) {
      console.error(`unable to register user: ${e}`)
      return { error: e }
    }
  }

  static async apiGetAllUsers() {
    try {
      const users = await User.find({}).exec()
      return users
    } catch (e) {
      console.error(`unable to retrieve users`)
      return { error: e }
    }
  }

  static async apiFindUserByUserId(userId) {
    try {
      const find = await User.findOne({ _id: userId }).exec()
      return find
    } catch (e) {
      console.error(`unable to find user`)
      return { error: e }
    }
  }

  static async apiUpdateUser(userId, user = {}) {
    try {
      return await User.updateOne(
        {
          _id: userId,
        },
        {
          username: user.username,
          email: user.email,
          profile: user.profile,
        }
      )
    } catch (e) {
      console.error('Unable to update user info')
      return { error: e }
    }
  }

  static async apiDeleteUser(userId) {
    try {
      const user = await User.findOneAndDelete({ _id: userId }).exec()
      return user
    } catch (e) {
      console.error(`unable to delete user: ${e}`)
      return { error: e }
    }
  }
}
