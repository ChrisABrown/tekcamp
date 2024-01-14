import AuthDAO from '../../DAO/authDAO.js'
import AppError from '../../utils/appError.js'
import Auth from '../../authenticate.js'
import jwt from 'jsonwebtoken'
import { checkUser } from '../../utils/functions.js'

let err
let response = {}

export default class AuthController {
  static async apiLogin(req, res, next) {
    checkUser(req.user).then((_res, err) => {
      if (err) {
        res.json({
          error: err,
        })
      }

      try {
        AuthDAO.apiFindUserByUserId(_res.user._id).then((user, error) => {
          req.logIn(user, (err) => {
            const refreshToken = Auth.getRefreshToken({ _id: user._id })
            user.refreshToken.push({ refreshToken })
            user.save()
            if (err) {
              res.statusCode = 500
              next(err)
              res.json((response = { error: `api: ${err}` }))
            }
          })

          const token = Auth.getToken({ _id: user._id })
          req.session.user = user
          req.headers.authorization = `Bearer ${token}`

          response = {
            success: user ? true : false,
            message: user ? `Welcome ${user.username}` : error,
            token: token,
          }

          res.cookie(
            'refreshToken',
            _res.user.refreshToken,
            Auth.COOKIE_OPTIONS
          )
          res.json(response)
        })
      } catch (err) {
        err = new AppError(response.message, res.status)

        next(err)
      }
    })
  }

  static async apiLogout(req, res, next) {
    checkUser(req.user).then((_res, err) => {
      if (err) {
        res.json({
          error: err,
        })
      }

      try {
        AuthDAO.apiFindUserByUserId(_res.user._id).then((user) => {
          req.logOut(user, (err) => {
            user.refreshToken = new Array(0)
            user.save()
            if (err) {
              res.statusCode = 500
              next(err)
              res.send(
                (response = {
                  error: `api: ${err}`,
                })
              )
            }
            res.clearCookie('refreshToken')
            req.session.destroy()
            res.send(
              (response = {
                success: true,
                message: `${user.username} logged out successfully`,
              })
            )
          })
        })
      } catch (err) {
        err = new AppError(res.message, res.statusCode)
        res.json({ error: err })
      }
    })
  }

  static async apiRegisterNewUser(req, res, next) {
    const user = {
      username: req.body.username,
      role: req.body.role,
      email: req.body.email,
      profile: req.body.profile,
      refreshToken: [],
    }
    const pw = req.body.password
    const newUser = await AuthDAO.apiRegisterNewUser(user, pw)
    const token = Auth.getToken({ _id: newUser._id })
    const refreshToken = Auth.getRefreshToken({ _id: newUser._id })

    response = {
      success: true,
      message: 'Thanks for signing up',
      token: token,
    }

    if ('error' in newUser) {
      response.success = false
      response.message = newUser.error.message
      response.token = ''
    } else {
      newUser.refreshToken.push({ refreshToken })
      newUser.save().then((user, err) => {
        if (err) return err
        return user
      })
    }

    err = new AppError(response.message, res.status)

    !response
      ? next(err) && res.send(response)
      : res.cookie('refreshToken', newUser.refreshToken, Auth.COOKIE_OPTIONS) &&
        res.send(response)
  }

  static async apiRefreshToken(req, res, next) {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies

    checkUser(req.user).then((response) => {
      let payload
      let tokenIndex
      let refToken
      let foundToken

      if (response.user !== undefined) {
        const userRefArr = response.user.refreshToken
        for (const ref of userRefArr) {
          refToken = ref
        }
        refreshToken.push({ refToken })
      }

      if (refreshToken) {
        foundToken = refToken.refreshToken
        payload = jwt.verify(foundToken, process.env.REFRESH_TOKEN_SECRET)

        const userId = payload.user._id
        const foundUser = AuthDAO.apiFindUserByUserId(userId)

        foundUser.then((user, err) => {
          if (err) {
            return res.json(
              (response = {
                status: res.status,
                message: response.message,
              })
            )
          }
          tokenIndex = user.refreshToken.findIndex(
            (item) => item.refreshToken === foundToken
          )

          if (tokenIndex === -1) {
            return res.json(
              (response = {
                status: res.status,
                message: 'Unauthorized: token not found',
              })
            )
          } else {
            const newRefreshToken = Auth.getRefreshToken(user._id)
            user.refreshToken[tokenIndex] = {
              refreshToken: newRefreshToken,
            }
            user.save().then((user, err) => {
              if (err) {
                return res.json(
                  (response = {
                    status: res.status,
                    message: `api: ${err}`,
                  })
                )
              } else {
                res.cookie('refreshToken', newRefreshToken, Auth.COOKIE_OPTIONS)
                return res.json((response = { success: true, user: user._id }))
              }
            })
          }
        })
      } else {
        err = new AppError(response.message, res.status)
        next(err)
        return res.json(
          (response = {
            status: res.status,
            message: 'Unauthorized: no refreshToken',
          })
        )
      }
    })
  }

  static async apiGetUserDetails(req, res, next) {
    let user
    const username = req.query.username
    if (
      (username && req.user.role === 'admin') ||
      (username && req.user.role === 'employee')
    ) {
      const userId = await AuthDAO.apiReturnUserId(username)
      return res.json(
        (response = {
          _id: userId,
          user: username,
        })
      )
    }

    checkUser(req.user).then((_res, error) => {
      user = _res.user
      const token = Auth.getToken({ _id: user._id })

      req.headers.authorization = `Bearer ${token}`

      err = new AppError(response['message'], res.statusCode)

      if (error) {
        next(err)
      } else {
        res.json(
          (response = {
            userDetails: user,
            message: `Hi, ${user?.profile?.firstName}`,
          })
        )
      }
    })
  }

  static async apiGetUsersByRole(req, res, next) {
    try {
      const usersPerPage = req.query.usersPerPage
        ? parseInt(req.query.usersPerPage)
        : 3
      const page = req.query.page ? parseInt(req.query.page) : 0

      let filters = {}
      if (req.query.role) {
        filters.role = req.query.role
      }
      const { totalNumUsers, usersList } = await AuthDAO.apiGetAllUsers({
        filters,
        page,
        usersPerPage,
      })

      response = {
        users: usersList,
        filters: filters,
        page: page,
        entries_per_page: usersPerPage,
        total_users: totalNumUsers,
      }

      res.send(response)
    } catch (e) {
      err = new AppError(e.message, res.statusCode)
      next(err)
    }
  }

  static async apiUpdateUser(req, res, next) {
    let user

    checkUser(req.user).then((_res, error) => {
      if (error) return error
      user = _res.user

      try {
        const userId = user._id || {}
        const usrObj = req.body.user

        const updateUser = {
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

        AuthDAO.apiUpdateUser(userId, updateUser).then((_res, error) => {
          if (error) next(error)
          response = {
            success: _res.updatedCount === 0 ? false : true,
            message:
              _res.matchedCount === 1
                ? `Matched ${_res.matchedCount} document`
                : `No matches for userId: ${userId}`,
            user: user,
            updatedUser: updateUser,
          }
          return res.json(response)
        })
      } catch (e) {
        err = new AppError(e.message, res.statusCode)

        res.json({ error: err })
      }
    })
  }

  static async apiDeleteUser(req, res, next) {
    let delUser
    let idToBeDeleted = req.query._id
    const user = await AuthDAO.apiFindUserByUserId(idToBeDeleted)

    checkUser(user).then((_res, error) => {
      if (error) next(error)
      delUser = _res.user
      try {
        AuthDAO.apiDeleteUser(delUser._id).then((_res, err) => {
          if (err) next(err)
          return _res
        })
        return res.json({ success: _res.success, userId: _res.user._id })
      } catch (e) {
        err = new AppError(e.message, res.statusCode)

        res.json({ error: err })
      }
    })
  }
}
