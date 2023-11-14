import AuthDAO from '../../DAO/authDAO.js'
import AppError from '../../appError.js'
import Auth from '../../authenticate.js'
import jwt from 'jsonwebtoken'

export default class AuthController {
  static async apiLogin(req, res, next) {
    const token = Auth.getToken({ _id: req.user._id })
    const refreshToken = Auth.getRefreshToken({ _id: req.user._id })

    const user = await AuthDAO.apiFindUserByUserId(req.user._id)

    req.logIn(user, (err) => {
      if (err) {
        response.status = 500
        response.message = err
        return next(err)
      }
      user.refreshToken.push({ refreshToken })
      user.save()
    })

    req.session.user = req.user

    let response = {
      status: 'error' in user ? 'Fail' : 'Success',
      message:
        'error' in user ? user.error.message : `Welcome ${req.user.username}`,
      token: token,
    }

    !response
      ? next(new AppError()) && res.json(new AppError('NotFound', 404))
      : res.cookie('refreshToken', user.refreshToken, Auth.COOKIE_OPTIONS) &&
        res.send(response).status(200)
  }

  static async apiLogout(req, res, next) {
    if (!req.user) return res.status(500).json({ message: 'no user signed in' })

    const user = await AuthDAO.apiFindUserByUserId(req.user._id)

    req.logOut(user, (err) => {
      user.refreshToken = new Array(0)
      user.save()
      if (err) {
        res.statusCode = 500
        res.send(err)
        return next(err)
      } else {
        res.clearCookie('refreshToken', Auth.COOKIE_OPTIONS)
        res.send({
          success: true,
          message: `${user.username} logged out successfully`,
        })
      }
    })
  }

  static async apiRegisterNewUser(req, res, next) {
    const user = {
      username: req.body.username,
      role: req.body.role,
      email: req.body.email,
      profile: req.body.profile,
    }
    const pw = req.body.password
    const newUser = await AuthDAO.apiRegisterNewUser(user, pw)
    const token = Auth.getToken({ _id: newUser._id })
    const refreshToken = Auth.getRefreshToken({ _id: newUser._id })

    newUser.refreshToken.push({ refreshToken })
    newUser.save().then((err) => {
      if (err) {
        ;(response.status = 500), (response.message = err)
      }
    })

    let response = {
      status: 'error' in newUser ? 'Fail' : 'Success',
      message:
        'error' in newUser ? newUser.error.message : 'Thanks for signing up',
      token,
    }

    !response
      ? next(new AppError()) && res.json(new AppError('NotFound', 404))
      : res.cookie('refreshToken', newUser.refreshToken, Auth.COOKIE_OPTIONS) &&
        res.send(response).status(200)
  }

  static async apiRefreshToken(req, res, next) {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies
    let payload
    let tokenIndex
    let refToken
    if (refreshToken) {
      for (const ref of refreshToken) {
        if (!ref.refreshToken in ref) {
          return res.status(401).json({ message: 'Unauthorized' })
        }
        refToken = ref.refreshToken
      }
      try {
        payload = jwt.verify(refToken, process.env.REFRESH_TOKEN_SECRET)
        const userId = payload._id
        await AuthDAO.apiFindUserByUserId(userId).then(
          (user) => {
            if (user) {
              tokenIndex = user.refreshToken.findIndex(
                (item) => item.refreshToken === refToken
              )
              if (tokenIndex === -1) {
                res.statusCode = 401
                res.send('Unauthorized')
              } else {
                const token = Auth.getToken({ _id: userId })
                const newRefreshToken = Auth.getRefreshToken({ _id: userId })
                user.refreshToken[tokenIndex] = {
                  refreshToken: newRefreshToken,
                }
                user.save().then((user, error) => {
                  if (error) {
                    res.status = 500
                    res.send(`${error}`)
                  } else {
                    res.cookie(
                      'refreshToken',
                      newRefreshToken,
                      Auth.COOKIE_OPTIONS
                    )
                    res.send({ success: true, token })
                  }
                })
              }
            } else {
              res.statusCode = 401
              res.send('Unauthorized')
            }
          },
          (err) => next(err)
        )
      } catch (err) {
        res.statusCode = 401
        res.send(`Error: ${err}`)
      }
    } else {
      res.statusCode = 401
      res.send('Unauthorized: no refreshToken')
    }
  }

  static async apiGetUserDetails(req, res, next) {
    if (!req.user) return res.status(401).json({ message: 'No user found.' })
    let response = {
      status: res.status === 200 ? 'Success!' : 'Fail!',
      userDetails: req.user,
    }
    res.send(response)
  }

  static async apiGetAllUsers(req, res, next) {
    let users
    try {
      users = await AuthDAO.apiGetAllUsers()
    } catch (e) {
      response.status = 403
      next(e)
    }

    let response = {
      status: 'error' in users ? 'Fail' : 'Success',
      userList: users,
      message: 'error' in users ? 'Unauthorized' : 'Retrieved all Users',
    }
    res.send(response)
  }

  static async apiUpdateUser(req, res, next) {
    try {
      const userId = req.query._id || {}
      const usrObj = req.body.user

      const user = {
        _id: userId,
        username: usrObj.username,
        email: usrObj.email,
        profile: {
          firstName: usrObj.profile.firstName,
          lastName: usrObj.profile.lastName,
          avatar: usrObj.profile.avatar,
          bio: usrObj.profile.bio,
          address: usrObj.profile.address,
        },
      }

      const response = await AuthDAO.apiUpdateUser(userId, user)

      res.json({
        status:
          response.modifiedCount === 0
            ? 'Update Failed'
            : 'Updated Successfully',
        message:
          response.matchedCount === 1
            ? `Matched ${response.matchedCount} document`
            : `No matches for userId: ${userId}`,
      })
    } catch (e) {
      let err = new AppError(e.message, res.status)
      next(err)
      res.json({ data: {}, error: e, message: `api ${e}` })
    }
  }
}
