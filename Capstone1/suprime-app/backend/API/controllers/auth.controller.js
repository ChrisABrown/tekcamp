import bcrypt from 'crypto'
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer'
import AuthDAO from '../../DAO/authDAO.js'

const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  audience: process.env.AUTH0_AUDIENCE,
})

export default class AuthController {
  static async signUp(req, res, next) {
    const user = {
      username: req.body.username,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
      email: req.body.email,
      profile: req.body.profile,
    }
    const newUser = await AuthDAO.signUp({ user })
    let response = {
      status: res.status,
      data: newUser,
      message: `New User created: ${newUser}`,
    }

    !response
      ? next(new AppError()) && res.json(new AppError('NotFound', 404))
      : res.send(response).status(200)
  }

  static async logIn(req, res, next) {
    if (!req.body.user.email) {
      res.status(422).json({ errors: { email: 'cannot be blank' } })
    }
    if (!req.body.user.password) {
      res.status(422).json({ errors: { password: 'cannot be blank' } })
    }
  }
}
