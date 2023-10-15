import jwt from 'express-jwt'
const secret = require('../../config').secret

function getTokenFromHeader(req) {
  req.headers.authorization &&
  req.headers.authorization.split(' ')[0] === 'Token'
    ? req.headers.authorization.split(' ')[1]
    : null
}

export const auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader,
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader,
  }),
}
