import request from 'supertest'
import app from '../../backend/index.js'
import { apiAuthTests } from './test_cases/authTests.js'
import { apiItemTests } from './test_cases/itemTests.js'
import { apiMessageTests } from './test_cases/messageTests.js'
import { addUsers, closeDB, fillInventory, init } from './utils/setup.js'

const agent = request.agent(app)

describe('API Response Tests', () => {
  beforeAll(async () => {
    init()
    await addUsers(agent)
    fillInventory()
  })

  afterAll(async () => {
    closeDB()
  })

  //Auth API Tests meant to run one after another to test signup, login, and token verification processes
  describe('Auth API Tests', () => apiAuthTests(agent))
  //API Tests for adding, deleting, and updating Items
  describe('Item API Tests', () => apiItemTests(agent))
  //API Tests for adding, deleting, and updating Messages
  describe('Message API Tests', () => apiMessageTests(agent))
})
