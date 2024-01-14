import mongoose from 'mongoose'
import { inventory } from '../data/item.test.data'
import { authEndpoints } from './variables.js'
import { admin, deletedUser, mockUser } from '../data/auth.test.data.js'
import { ItemSchema } from '../../../backend/DAO/models/Item.js'
import User from '../../../backend/DAO/models/User.js'
import Message from '../../../backend/DAO/models/Message.js'
import Order from '../../../backend/DAO/models/Order.js'

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
  mongoose.model('Item', ItemSchema)
  db.model('Item').insertMany(inventory)
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

export const signInEmployee = async (agent) => {
  const { body } = await agent
    .post(`${authEndpoints[1]}`)
    .send({ username: mockUser.username, password: mockUser.password })
  token = body.token
  return token
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
