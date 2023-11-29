import request from 'supertest'
import app from '../../backend/index.js'
import { closeDB, init } from './utils/setup.js'
import { admin as _admin } from '../backend/data/auth.test.data.js'

describe('API Response Tests', (body, token) => {
  let response

  beforeAll(async () => {
    init()
  })

  afterAll(async () => {
    closeDB()
  })
  describe('Auth API Tests', () => {
    test('POST /api/v1/users/signup', async () => {
      response = await request(app).post('/api/v1/users/signup').send(_admin)
      body = response.body
      expect(body.success).toBe(true)
      expect(body).toHaveProperty('token')
    })
    test('POST /api/v1/users/login', async () => {
      response = await request(app).post('/api/v1/users/login').send({
        username: _admin.username,
        password: _admin.password,
      })
      expect(body).toHaveProperty('token')
    })
  })

  describe('Item API tests', () => {
    test('GET /api/v1/items', (done) => {
      request(app)
        .get('/api/v1/items')
        .then((response) => {
          expect(response.statusCode).toBe(200)
          done()
        })
    })
  })
})
