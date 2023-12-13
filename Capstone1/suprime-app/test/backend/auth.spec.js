import request from 'supertest'
import app from '../../backend/index.js'
import { mockUser } from './data/auth.test.data.js'
import { closeDB, init } from './utils/setup.js'
import { apiAuthTests } from './test cases/test1.js'
import { authEndpoints } from './utils/variables.js'

const agent = request.agent(app)

describe('API Response Tests', () => {
  let token
  beforeAll(async () => {
    init()
    await agent
      .post(`${authEndpoints[0]}`)
      .set('Accept', 'application/json')
      .send(mockUser)
  })

  beforeEach(async () => {
    const { body } = await agent
      .post(`${authEndpoints[1]}`)
      .set('Accept', 'application/json')
      .send({ username: mockUser.username, password: mockUser.password })
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
  // describe('Unauthorized Auth API Tests')

  describe('Item API tests', () => {
    test('GET /api/v1/items', async () => {
      await request(app)
        .get('/api/v1/items')
        .then((response) => {
          expect(response.statusCode).toBe(200)
        })
    })
  })
})
