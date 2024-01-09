import {
  closeDB,
  init,
  fillInventory,
  addUsers,
  signInAdmin,
  signOutAdmin,
} from './utils/setup.js'
import { apiAuthTests } from './test_cases/authTests.js'
import { apiItemTests } from './test_cases/itemTests.js'
import request from 'supertest'
import app from '../../backend/index.js'

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

  beforeEach(async () => {
    await signInAdmin(agent)
  })

  afterEach(async () => {
    await signOutAdmin(agent)
  })

  //Auth API Tests meant to run one after another to test signup, login, and token verification processes
  describe('Auth API Tests', () => apiAuthTests(agent))
  //Auth API Tests for adding, deleting, and updating Items
  describe('Item API tests', () => apiItemTests(agent))
})
