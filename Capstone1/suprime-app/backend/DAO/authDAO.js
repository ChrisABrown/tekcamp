import User from './models/User.js'

export default class AuthDAO {
  static async apiRegisterNewUser(user = {}, pw) {
    try {
      return await User.register(
        new User({
          username: user.username,
          role: user.role,
          email: user.email,
          profile: user.profile,
          refreshToken: user.refreshToken,
        }),
        pw
      )
    } catch (e) {
      return { error: e }
    }
  }

  static async apiGetAllUsers({
    filters = null,
    page = 0,
    usersPerPage = 3,
  } = {}) {
    {
      let query

      if (filters) {
        if ('role' in filters) {
          query = {
            role: {
              $eq: filters['role'],
            },
          }
        }
      }
      let usersList
      try {
        usersList = await User.find(query).limit(usersPerPage)
        const totalNumUsers = await User.countDocuments(query)
        return { totalNumUsers, usersList }
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`)
        return { usersList: [], totalNumUsers: 0 }
      }
    }
  }

  static async apiReturnUserId(username) {
    try {
      const user = await User.findOne({ username: username })
      return user._id
    } catch (e) {
      console.error(`Unable to find user with username: ${username}`)
      return { error: e }
    }
  }

  static async apiFindUserByUserId(userId) {
    if (userId === undefined) return
    try {
      return await User.findOne({ _id: userId }).exec()
    } catch (e) {
      console.error(`No user found with userId: ${userId}`)
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
      console.error(`User with userId: ${userId}, cannot be found`)
      return { error: e }
    }
  }

  static async apiDeleteUser(userId) {
    User.findById(userId).then((_res, err) => {
      if (err) return err
      try {
        return User.findByIdAndDelete({ _id: _res._id })
      } catch (e) {
        return { error: e, message: e.message }
      }
    })
  }
}
