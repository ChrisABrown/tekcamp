import bcrypt from 'bcrypt'
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer'
import User from '../../DAO/models/User'
import AuthDAO from '../../DAO/authDAO'

const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  audience: process.env.AUTH0_AUDIENCE,
})

export default class AuthController {
  static async signUp(req, res) {
    const user = {
      username: req.body.username,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
      email: req.body.email,
      profile: req.body.profile,
    }
    const newUser = await AuthDAO.signUp(user)

    let response = {
      status: res.status,
      data: newUser,
    }
  }
}
