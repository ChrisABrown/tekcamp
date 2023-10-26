import AuthDAO from '../../DAO/authDAO.js'
import Auth from '../../authenticate.js'

export default class AuthController {
  static async logIn(req, res, next) {
    const user = () => AuthDAO.logIn(req.user)

    const token = Auth.getToken({ _id: req.user._id })

    const refreshToken = Auth.getRefreshToken({ _id: req.user._id })

    await user().then(
      (user) => {
        user.refreshToken.push({ refreshToken })
        user.save((err, user) => {
          if (err) {
            res.statusCode = 500
            res.send(err)
          } else {
            res.cookie(
              'refreshToken',
              refreshToken,
              Authentication.COOKIE_OPTIONS
            )
            res.send({ success: true, token })
          }
        })
      },
      (err) => next(err)
    )

    console.log(user)
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
    newUser.save().then((err, user) => {
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
      : res.send(response).status(200) &&
        res.cookie('refreshToken', newUser.refreshToken, COOKIE_OPTIONS)
  }
}
