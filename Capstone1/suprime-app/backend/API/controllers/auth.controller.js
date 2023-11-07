import AuthDAO from '../../DAO/authDAO.js'
import Auth from '../../authenticate.js'
import jwt from 'jsonwebtoken'

export default class AuthController {
  static async logIn(req, res, next) {
    const token = Auth.getToken({ _id: req.user._id })
    const refreshToken = Auth.getRefreshToken({ _id: req.user._id })

    const user = await AuthDAO.findUser(req.user._id)

    req.login(user, (err) => {
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

  static async logOut(req, res, next) {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies
    let tokenIndex

    await AuthDAO.findUser(req.user._id).then((user) => {
      tokenIndex = user.refreshToken.findIndex(
        (item) => item.refreshToken === refreshToken
      )
      if (tokenIndex !== -1) {
        user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove()
      }
      user.save().then((user, err) => {
        if (err) {
          res.statusCode = 500
          res.send(err)
        } else {
          res.clearCookie('refreshToken', Auth.COOKIE_OPTIONS)
          res.send({ success: true })
        }
      })
    }),
      (err) => next(err)
  }

  static async signUp(req, res, next) {
    const user = {
      username: req.body.username,
      role: req.body.role,
      email: req.body.email,
      profile: req.body.profile,
    }
    const pw = req.body.password
    const newUser = await AuthDAO.signUp(user, pw)
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

  static async refreshToken(req, res, next) {
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
        await AuthDAO.findUser(userId).then(
          (user) => {
            if (user) {
              tokenIndex = user.refreshToken.findIndex(
                (item) => item.refreshToken == refToken
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

  static async getUserDetails(req, res, next) {
    if (!req.user) return res.status(401).json({ message: 'No user found.' })
    let response = {
      status: res.status === 200 ? 'Success!' : 'Fail!',
      userDetails: req.user,
    }
    res.send(response)
  }

  static async getAllUsers(req, res, next) {
    let users
    try {
      users = await AuthDAO.getAllUsers()
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
}
