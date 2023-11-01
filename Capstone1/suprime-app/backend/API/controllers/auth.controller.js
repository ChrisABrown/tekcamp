import AuthDAO from '../../DAO/authDAO.js'
import User from '../../DAO/models/User.js'
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
      // data: 'error' in newUser ? newUser.error.name : newUser._doc,
      message:
        'error' in newUser ? newUser.error.message : 'Thanks for signing up',
      token,
    }

    !response
      ? next(new AppError()) && res.json(new AppError('NotFound', 404))
      : res.cookie('refreshToken', newUser.refreshToken, Auth.COOKIE_OPTIONS) &&
        res.send(response).status(200)
  }

  static async refreshToken(req, res, next) {}
}
