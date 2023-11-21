// import mongoose from 'mongoose'
// import app from '../index.js'
// import { reqAddProduct, reqUpdateProduct } from './data/item.test.data.js'

// let SKU = ''
// const token = `${process.env.TEST_ADMIN}`

// describe('GET /api/v1/items', () => {
//   test('should return all items', async (done) => {
//     await request(app)
//       .get('/api/v1/items')
//       .expect('Content-Type', /application\/json/)
//       .expect(200)
//       .then((res) => {
//         expect(res.statusCode).toBe(200)
//       })
//     done()
//   })
// })

// describe('POST /api/v1/items', () => {
//   test('should create new item', async (done) => {
//     await request(app)
//       .post('/api/v1/items')
//       .set('Authorization', `Bearer ${token}`)
//       .send(reqAddProduct)
//       .expect(201)
//       .then((res, { body }) => {
//         console.log(res)
//         SKU = body.itemSKU
//       })
//     done()
//   })
// })

// describe(`GET /api/v1/items?sku=${SKU}`, () => {
//   test(`should return item with sku: ${SKU}`, async (done) => {
//     await request(app)
//       .get(`/api/v1/items?sku=${SKU}`)
//       .query({ sku: `${SKU}` })
//       .expect('Content-Type', /application\/json/)
//       .expect(200)
//       .then((res) => {
//         console.log(res)
//         expect(res.statusCode).toBe(200)
//       })
//     done()
//   })
// })

// describe(`PUT /api/v1/items?sku=${SKU}`, () => {
//   test(`should update item with sku: ${SKU}`, async (done) => {
//     await request(app)
//       .put(`/api/v1/items?sku=${SKU}`)
//       .set('Authorization', `Bearer ${token}`)
//       .query({ sku: `${SKU}` })
//       .send(reqUpdateProduct)
//       .then((res) => {
//         console.log(res)
//         expect(res.statusCode).toBe(200)
//       })
//     done()
//   })
// })

// describe('Checking authorization middleware', () => {
//   test('should create an item', async (done) => {
//     await request(app)
//       .post('/api/v1/items')
//       .send(reqAddProduct)
//       .then((res) => {
//         expect(res.statusCode).toBe(401)
//       })
//     done()
//   })
// })

// describe(`DELETE /api/v1/items?sku=${SKU}`, () => {
//   test('should delete an item', async (done) => {
//     await request(app)
//       .delete(`/api/v1/items?sku=${SKU}`)
//       .set('Authorization', `Bearer ${token}`)
//       .then((res) => {
//         expect(res.statusCode).toBe(200)
//       })
//     done()
//   })
// })
