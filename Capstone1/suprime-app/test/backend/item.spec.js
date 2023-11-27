import app from '../../backend/index.js'
import request from 'supertest'
import { reqAddProduct, reqUpdateProduct } from './data/item.test.data.js'

let SKU = ''
const token = `${process.env.TEST_ADMIN}`

describe('GET /api/v1/items', () => {
  it('should return all items', function (done) {
    this.timeout(5000)
    request(app)
      .get('/api/v1/items')
      .expect(200)
      .end(function (err, res) {
        if (err) done(err)
        done()
      })
  })
})

describe(`GET /api/v1/items?sku=${SKU}`, () => {
  it(`should return item with sku: ${SKU}`, async (done) => {
    await request(app)
      .get(`/api/v1/items?sku=${SKU}`)
      .query({ sku: `${SKU}` })
      .expect('Content-Type', /application\/json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200)
      })
    done()
  })
})

describe(`PUT /api/v1/items?sku=${SKU}`, () => {
  it(`should update item with sku: ${SKU}`, async (done) => {
    await request(app)
      .put(`/api/v1/items?sku=${SKU}`)
      .set('Authorization', `Bearer ${token}`)
      .query({ sku: `${SKU}` })
      .send(reqUpdateProduct)
      .then((res) => {
        expect(res.statusCode).toBe(200)
      })
    done()
  })
})

describe('Checking authorization middleware', () => {
  it('should create an item', async (done) => {
    await request(app)
      .post('/api/v1/items')
      .send(reqAddProduct)
      .then((res) => {
        expect(res.statusCode).toBe(401)
      })
    done()
  })
})

describe(`DELETE /api/v1/items?sku=${SKU}`, () => {
  it('should delete an item', async (done) => {
    await request(app)
      .delete(`/api/v1/items?sku=${SKU}`)
      .set('Authorization', `Bearer ${token}`)
      .then((res) => {
        expect(res.statusCode).toBe(200)
      })
    done()
  })
})
