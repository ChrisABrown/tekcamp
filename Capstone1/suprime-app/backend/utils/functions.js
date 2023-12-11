import { response } from 'express'

let res = response

export const checkUser = (user) => {
  let response = {
    success: true,
    user: user,
  }

  if (user === undefined && res.statusCode === 401) {
    err.message = 'Must be logged in to continue'
    err.success = false
    return err
  }
  return Promise.resolve(response)
}
