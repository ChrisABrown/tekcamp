import AuthDAO from '../../DAO/authDAO.js'
import Auth from '../../authenticate.js'
import jwt from 'jsonwebtoken'

export default class AuthController {
  static async logIn(req, res, next) {
    const token = Auth.getToken({ _id: req.user._id })
    const refreshToken = Auth.getRefreshToken({ _id: req.user._id })

    const user = await AuthDAO.logIn(req.user)

    user.save().then((user) => {
      user.refreshToken.push({ refreshToken })
      user.save().then((err) => {
        if (err) {
          response.status = 500
          response.message = err
        }
      })
    })

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

  static async signUp(req, res, next) {
    const user = {
      username: req.body.username,
      email: req.body.email,
      profile: req.body.profile,
    }
    const newUser = await AuthDAO.signUp(user, req)
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
      // data: 'error' in newUser ? newUser.error.name : newUser._doc,
      message:
        'error' in newUser ? newUser.error.message : 'Thanks for signing up',
      token: token,
    }

    !response
      ? next(new AppError()) && res.json(new AppError('NotFound', 404))
      : res.cookie('refreshToken', newUser.refreshToken, Auth.COOKIE_OPTIONS) &&
        res.send(response).status(200)
  }

  static async refreshToken(req, res, next) {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies
    let findUser
    console.log(refreshToken._id)

    if (refreshToken) {
      try {
        const payload = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET
        )
        const userId = payload._id
        findUser = async () => await AuthDAO.refreshToken(userId)

        findUser().then(
          (user) => {
            if (user) {
              const tokenIndex = user.refreshToken.findIndex(
                (item) => item.refreshToken === refreshToken
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
                user.save().then((err, user) => {
                  if (err) {
                    res.status = 500
                    res.send(err)
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
      res.send('Unauthorized')
    }
  }
}
