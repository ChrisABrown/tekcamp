import { expressjwt as jwt } from 'express-jwt'
import bcrypt from 'bcrypt'
import User from '../../DAO/models/User'

export default class AuthController {
  static async signUp(req, res) {
    const user = {
      username: req.body.username,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
      email: req.body.email,
      profile: req.body.profile,
    }
  }
}
