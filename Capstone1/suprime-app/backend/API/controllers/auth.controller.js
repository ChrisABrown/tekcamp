import AuthDAO from '../../DAO/authDAO.js'
import AppError from '../../utils/appError.js'
import Auth from '../../authenticate.js'
import jwt from 'jsonwebtoken'
import { checkUser } from '../../utils/functions.js'

let err
let response = {}

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

    response = {
      status: 'error' in user ? 'Fail' : 'Success',
      message:
        'error' in user ? user.error.message : `Welcome ${req.user.username}`,
      token: token,
    }

    err = new AppError(response.message, res.status)

    !response
      ? next(err) &&
        res.send(
          (response = { error: `api: ${err}`, response: info(req.user) })
        )
      : res.cookie('refreshToken', user.refreshToken, Auth.COOKIE_OPTIONS) &&
        res.send(response)
  }

  static async apiLogout(req, res, next) {
    checkUser(req.user)

    const user = await AuthDAO.apiFindUserByUserId(req.user._id)

    req.logOut(user, (err) => {
      user.refreshToken = new Array(0)
      user.save()
      if (err) {
        res.statusCode = 500
        next(err)
        res.send(
          (response = {
            error: `api: ${err}`,
            response: info(req.user),
          })
        )
      } else {
        res.clearCookie('refreshToken', Auth.COOKIE_OPTIONS)
        res.send(
          (response = {
            success: true,
            message: `${user.username} logged out successfully`,
          })
        )
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

    let token = ''

    if (newUser instanceof Error && newUser !== undefined) {
      const refreshToken = Auth.getRefreshToken({ _id: newUser._id })
      token = Auth.getToken({ _id: newUser._id })
      newUser.refreshToken.push({ refreshToken })
      newUser.save().then((err) => {
        if (err) {
          response = {
            status: res.status,
            message: `api: ${err}`,
          }
          return
        }
      })
    }

    response = {
      status: newUser instanceof Error ? 'Fail' : 'Success',
      message:
        newUser instanceof Error
          ? newUser.error.message
          : 'Thanks for signing up',
      token,
    }
    err = new AppError(response.message, res.status)

    !response
      ? next(err) &&
        res.send(
          (response = {
            error: `api: ${err}`,
            response: info(req.user),
          })
        )
      : res.cookie('refreshToken', newUser.refreshToken, Auth.COOKIE_OPTIONS) &&
        res.send(response)
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
          res.send(
            (response = {
              status: res.status,
              message: 'Unauthorized',
            })
          )
          return
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
                res.send(
                  (response = {
                    status: res.status,
                    message: 'Unauthorized',
                  })
                )
                return
              } else {
                const token = Auth.getToken({ _id: userId })
                const newRefreshToken = Auth.getRefreshToken({ _id: userId })
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
                    res.cookie(
                      'refreshToken',
                      newRefreshToken,
                      Auth.COOKIE_OPTIONS
                    )
                    res.send((response = { success: true, token }))
                  }
                })
              }
            } else {
              res.send(
                (response = {
                  status: res.status,
                  message: 'Unauthorized',
                })
              )
              return
            }
          },
          (err) => next(err)
        )
      } catch (e) {
        res.send(
          (response = {
            status: res.status,
            message: `Error: ${e}`,
          })
        )
      }
    } else {
      res.send(
        (response = {
          status: res.status,
          message: 'Unauthorized: no refreshToken',
        })
      )
      return
    }
  }

  static async apiGetUserDetails(req, res, next) {
    checkUser(req.user)
    response = {
      status: res.status === 200 ? 'Success!' : 'Fail!',
      userDetails: req.user,
    }

    err = new AppError(response.message, res.status)
    !response
      ? next(err) &&
        res.send(
          (response = {
            message: `api: ${err}`,
          })
        )
      : res.send(response)
  }

  static async apiGetAllUsers(req, res, next) {
    let users
    response = {
      status: 'error' in users ? 'Fail' : 'Success',
      userList: users,
      message: 'error' in users ? 'Unauthorized' : 'Retrieved all Users',
    }
    try {
      users = await AuthDAO.apiGetAllUsers()
      res.send(response)
    } catch (e) {
      next(e)
      res.send((response = { message: `api: ${e}` }))
    }
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

      const updateResponse = await AuthDAO.apiUpdateUser(userId, user)

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
      res.send({ data: {}, error: `api ${err}` })
    }
  }
}
