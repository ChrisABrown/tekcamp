import request from 'supertest'
import app from '../../backend/index.js'
import { admin, deletedUser, mockUser } from './data/auth.test.data.js'
import { closeDB, init } from './utils/setup.js'
import { apiAuthTests } from './test_cases/authTests.js'
import { authEndpoints } from './utils/variables.js'
import { apiItemTests } from './test_cases/test2.js'

const agent = request.agent(app)

describe('API Response Tests', () => {
  let token
  beforeAll(async () => {
    init()
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
  })

  beforeEach(async () => {
    const { body } = await agent
      .post(`${authEndpoints[1]}`)
      .send({ username: admin.username, password: admin.password })
    token = body.token
    return token
  })

  afterEach(async () => {
    await agent.get(`${authEndpoints[3]}`)
  })

  afterAll(async () => {
    closeDB()
  })

  //Auth API Tests meant to run one after another to test signup, login, and token verification processes
  describe('Auth API Tests', () => apiAuthTests(agent))
  //Auth API Tests for adding, deleting, and updating Items
  describe('Item API tests', () => apiItemTests(agent))
})
