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
  return jwt.sign({ user: user }, JWT_SECRET, {
    expiresIn: eval(SESSION_EXP),
  })
}

const getRefreshToken = (user) => {
  const refreshToken = jwt.sign({ user: user }, REFRESH_TOKEN_SECRET, {
    expiresIn: eval(REFRESH_TOKEN_EXP),
  })
  return refreshToken
}

const verifyToken = (permissions) => (req, res, next) => {
  const user = req.session.user
  const token = getToken({ _id: req.user_id })

  if (!user) return res.status(500).json({ message: 'Must be logged in' })

  if (!token) return res.status(401).json({ message: 'No token provided' })

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' })
    decoded.user = user

    permissions.includes(decoded.user.role)
      ? next()
      : res.status(403).json({
          message: 'You do not have the permissions to access this resource',
        })
  })
}

const verifyUser = () => (req, res, next) => {
  if (req.isAuthenticated()) {
    const userID = req.user._id

    User.findById(userID).then((user, err) => {
      if (err) {
        res.send((response = { message: err }))
      }
      !user
        ? res.status(401).json({ message: 'Unauthorized: User not found' })
        : (req.loggedInUser = user && next())
    })
  } else {
    return res
      .status(401)
      .json({ message: 'Unauthorized: User not authenticated' })
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
