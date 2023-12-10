import { response } from 'express'

let res = response

export const checkUser = (user) => {
  let response = {
    success: true,
    user: user,
  }

  if (user === undefined && res.statusCode === 401) {
    response.message = 'Must be logged in to continue'
    response.success = false
    return response
  }
  return Promise.resolve(response)
}
