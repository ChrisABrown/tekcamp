import { Router as expressRouter } from 'express'
import passport from 'passport'
import querystring from 'querystring'

const authRouter = expressRouter()

authRouter.get(
  '/login',
  passport.authenticate('auth0', {
    scope: 'openid email profile',
  }),
  (req, res) => {
    res.redirect('/')
  }
)

authRouter.get('/callback', (req, res, next) => {
  passport.authenticate('auth0', (err, user, info) => {
    if (err) return next(err)
    if (!user) return res.redirect('/login')
    req.login(user, (err) => {
      if (err) return next(err)
      const returnTo = req.session.returnTo
      delete req.session.returnTo
      res.redirect(returnTo || '/')
    })
  })(res, res, next)
})

authRouter.get('/logout', (req, res) => {
  req.logout()
  let returnTo = req.protocol + '://' + req.hostname
  const port = req.socket.localPort

  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo =
      process.env.NODE_ENV === 'production'
        ? `${returnTo}/`
        : `${returnTo}:${port}/`
  }

  const logoutURL = new URL(`https://${process.env.AUTH0_DOMAIN}/v2/logout`)

  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo: returnTo,
  })

  logoutURL.search = searchString

  res.redirect(logoutURL)
})
// function getTokenFromHeader(req) {
//   req.headers.authorization &&
//   req.headers.authorization.split(' ')[0] === 'Token'
//     ? req.headers.authorization.split(' ')[1]
//     : null
// }

// const auth = {
//   required: jwt({
//     secret: process.env.SECRET,
//     algorithms: ['HS512'],
//     userProperty: 'payload',
//     getToken: getTokenFromHeader,
//   }),
//   optional: jwt({
//     secret: process.env.SECRET,
//     algorithms: ['HS512'],
//     userProperty: 'payload',
//     credentialsRequired: false,
//     getToken: getTokenFromHeader,
//   }),
// }

export default authRouter
