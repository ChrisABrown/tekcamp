import { request, response } from 'express'

let req = request
let res = response
let user = req.user

export const checkUser = async (user) => {
  let response = {
    success: res.status === 200 ? true : false,
    status: res.status,
  }

  if (!user && res.status === 401) {
    response.message = 'Must be logged in to continue'
    response.status = res.status
    return response
  }
  return response
}

export const info = async (user) => {
  await checkUser(user).then((result) => {
    return result
  })
}
