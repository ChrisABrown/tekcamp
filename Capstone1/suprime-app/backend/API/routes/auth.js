import { auth, requiredScopes } from 'express-oauth2-jwt-bearer'
import { Router as expressRouter } from 'express'

const authRouter = expressRouter()

const validateAccessToken = auth({
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
  audience: process.env.AUTH0_AUDIENCE,
})

// enforce on all endpoints

authRouter.get('/authorized', validateAccessToken, function (req, res) {
  res.send('Secured Resource')
})

export default authRouter
