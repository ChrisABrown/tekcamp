import mongoose from 'mongoose'
import { inventory } from '../data/item.test.data'
import { authEndpoints } from './variables.js'
import { admin, deletedUser, mockUser } from '../data/auth.test.data.js'

let connection
let db
let token

const uri = process.env.SUPRIME_DB_URI

export const init = async () => {
  connection = mongoose.connect(uri)
  db = mongoose.connection
}
export const fillInventory = async () => {
  db = mongoose.connection
  db.collection('items').insertMany(inventory)
}

export const closeDB = async () => {
  db = mongoose.connection
  await db.dropDatabase()
  await db.close()
}

export const addUsers = async (agent) => {
  await agent
    .post(`${authEndpoints[0]}`)
    .set('Accept', 'application/json')
    .send(admin)

  await agent
    .post(`${authEndpoints[0]}`)
    .set('Accept', 'application/json')
    .send(mockUser)

  await agent
    .post(`${authEndpoints[0]}`)
    .set('Accept', 'application/json')
    .send(deletedUser)
}

export const signInAdmin = async (agent) => {
  const { body } = await agent
    .post(`${authEndpoints[1]}`)
    .send({ username: admin.username, password: admin.password })
  token = body.token
  return token
}

export const signOutAdmin = async (agent) => {
  await agent.get(`${authEndpoints[3]}`)
}
