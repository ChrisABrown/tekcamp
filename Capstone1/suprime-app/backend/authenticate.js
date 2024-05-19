import jwt from 'jsonwebtoken'
import User from './DAO/models/User.js'

const JWT_SECRET = process.env.JWT_SECRET
const REFRESH_TOKEN_EXP = process.env.REFRESH_TOKEN_EXPIRY
const SESSION_EXP = process.env.SESSION_EXPIRY
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET

const dev = process.env.NODE_ENV !== 'production'
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: !dev,
  signed: true,
  maxAge: eval(REFRESH_TOKEN_EXP) * 1000,
  sameSite: false,
}

const getToken = (user) => {
  const token = jwt.sign({ user: user }, JWT_SECRET, {
    expiresIn: eval(SESSION_EXP),
  })
  return token
}

const getRefreshToken = (user) => {
  const refreshToken = jwt.sign({ user: user }, REFRESH_TOKEN_SECRET, {
    expiresIn: eval(REFRESH_TOKEN_EXP),
  })
  return refreshToken
}

const verifyToken = (permissions) => (req, res, next) => {
  const token = getToken({ user: req.user })

  if (!token || token === undefined) {
    return res.status(401).json({ message: 'No token provided' })
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      decoded.user = req.user

      if (err) {
        return res.status(401).json({ message: 'Invalid token' })
      }

      if (!permissions.includes(decoded.user.role)) {
        res.status(403).json({
          message: 'You do not have the permissions to access this resource',
        })
      }
      next()
    })
  }
}

const verifyUser = () => (req, res, next) => {
  if (req.isAuthenticated() && req.user) {
    const userID = req.user._id

    User.findById(userID).then((user, err) => {
      if (err) {
        res.send((response = { message: err }))
      }
      !user
        ? res.status(401).json({ message: 'Unauthorized: User not found' })
        : (req.user = user && next())
    })
  } else {
    res.json({ message: 'Unauthorized: User not authenticated' })
  }
}

const Auth = {
  getRefreshToken,
  getToken,
  verifyToken,
  verifyUser,
  COOKIE_OPTIONS,
}

export default Auth
