import AuthDAO from '../../DAO/authDAO.js'
import AppError from '../../utils/appError.js'
import Auth from '../../authenticate.js'
import jwt from 'jsonwebtoken'
import { checkUser } from '../../utils/functions.js'

let err
let response = {}

export default class AuthController {
  static async apiLogin(req, res, next) {
    const user = await AuthDAO.apiFindUserByUserId(req.user._id)
    const token = Auth.getToken({ _id: user._id })
    const refreshToken = Auth.getRefreshToken({ _id: user._id })
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
    req.headers.authorization = `Bearer ${token}`

    response = {
      success: 'error' in user ? false : true,
      message:
        'error' in user ? user.error.message : `Welcome ${req.user.username}`,
      token: token,
    }

    err = new AppError(response.message, res.status)

    !response
      ? next(err) && res.send((response = { error: `api: ${err}` }))
      : res.cookie('refreshToken', user.refreshToken, Auth.COOKIE_OPTIONS) &&
        res.send(response)
  }

  static async apiLogout(req, res, next) {
    checkUser(req.user).then((_res, err) => {
      if (err) {
        res.send({
          error: err,
        })
      }

      try {
        AuthDAO.apiFindUserByUserId(_res.user._id).then((user, err) => {
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

    let payload
    let tokenIndex
    let refToken
    let foundToken

    checkUser(req.user).then((response) => {
      if (response.user !== undefined) {
        const userRefArr = response.user.refreshToken
        for (let ref of userRefArr) {
          refToken = ref
        }

        refreshToken.push({ refToken })
      }

      if (refreshToken) {
        foundToken = refToken.refreshToken
        payload = jwt.verify(foundToken, process.env.REFRESH_TOKEN_SECRET)

        const userId = payload.user._id
        let foundUser = AuthDAO.apiFindUserByUserId(userId)

        foundUser.then((user, err) => {
          if (err) {
            res.send(
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
            res.send(
              (response = {
                status: res.status,
                message: 'Unauthorized: token not found',
              })
            )
            return
          } else {
            const newRefreshToken = Auth.getRefreshToken(user._id)
            user.refreshToken[tokenIndex] = {
              refreshToken: newRefreshToken,
            }
            user.save().then((user, err) => {
              if (err) {
                res.send(
                  (response = {
                    status: res.status,
                    message: `api: ${err}`,
                  })
                )
              } else {
                res.cookie('refreshToken', newRefreshToken, Auth.COOKIE_OPTIONS)
                res.send((response = { success: true, user: user._id }))
              }
            })
          }
        })
      } else {
        res.send(
          (response = {
            status: res.status,
            message: 'Unauthorized: no refreshToken',
          })
        )
        err = new AppError(response.message, res.status)
        return next(err)
      }
    })
  }

  static async apiGetUserDetails(req, res, next) {
    let user
    checkUser(req.user).then((_res, error) => {
      user = _res.user
      const token = Auth.getToken({ _id: user._id })

      req.headers.authorization = `Bearer ${token}`

      response = {
        userDetails: user,
        message: `Hi, ${user?.profile?.firstName}`,
      }

      err = new AppError(response['message'], res.status)

      if (error) next(err)
      res.json(response)
    })
  }

  static async apiGetUsersByRole(req, res, next) {
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
    err = new AppError(response.message, res.status)
    !response
      ? next(err) && res.send((response = { error: `api: ${e}` }))
      : res.send(response)
  }

  static async apiUpdateUser(req, res, next) {
    try {
      const userId = req.user._id || {}
      const usrObj = req.body.user

      const user = {
        _id: userId,
        username: usrObj?.username,
        email: usrObj.email,
        profile: {
          firstName: usrObj.profile.firstName,
          lastName: usrObj.profile.lastName,
          avatar: usrObj.profile.avatar,
          bio: usrObj.profile.bio,
          address: usrObj.profile.address,
        },
        messages: new Array(0),
        orderList: new Array(0),
      }

      const updateResponse = await AuthDAO.apiUpdateUser(userId, user)

      console.log(updateResponse)
      res.send({
        status:
          updateResponse.modifiedCount === 0
            ? 'Update Failed'
            : 'Updated Successfully',
        message:
          updateResponse.matchedCount === 1
            ? `Matched ${updateResponse.matchedCount} document`
            : `No matches for userId: ${userId}`,
      })
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)
      // res.send({ data: {}, error: `api ${err}` })
    }
  }
}
