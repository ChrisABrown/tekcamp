import { expressjwt as jwt } from 'express-jwt'
import { secret } from '../../config/index.js'

function getTokenFromHeader(req) {
  req.headers.authorization &&
  req.headers.authorization.split(' ')[0] === 'Token'
    ? req.headers.authorization.split(' ')[1]
    : null
}

export const auth = {
  required: jwt({
    secret: secret,
    algorithms: ['HS512'],
    userProperty: 'payload',
    getToken: getTokenFromHeader,
  }),
  optional: jwt({
    secret: secret,
    algorithms: ['HS512'],
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader,
  }),
}
