// import { expect } from 'chai'
// import request, { agent } from 'supertest'
// import { admin } from './data/auth.test.data.js'
// import app from '../../backend/index.js'

// // modified from https://medium.com/@juha.a.hytonen/testing-authenticated-requests-with-supertest-325ccf47c2bb
// // authenticatedRequest function. this did not work for me
// // function createAuthenticatedRequest(cb) {
// //   agent.post("/api/login").send(user).end(function(error, response) {
// //     if (error) {
// //       throw error;
// //     }
// //     cb(agent);
// //   });
// // }
// function promisedAuthRequest() {
//   let authAgent = agent(app)
//   return new Promise((resolve, reject) => {
//     authAgent
//       .post('/api/v1/users/login')
//       .send(admin)
//       .end(function (error, response) {
//         if (error) reject(error)
//         resolve(authAgent)
//       })
//   })
// }

// function promisedCookie() {
//   return new Promise((resolve, reject) => {
//     request(app)
//       .post('/api/v1/users/login')
//       .send(admin)
//       .end(function (error, response) {
//         if (error) reject(error)
//         let loginToken = response.body.token
//         resolve(loginToken)
//       })
//   })
// }

// describe('routes', () => {
//   it('hits a public route successfully', async () => {
//     const res = await request(app).get('/api/v1/users/signup').expect(200)
//     expect(res.body.answer).to.be.null

//     return res
//   })

//   it('hits a private route with superagent authentication', async () => {
//     return promisedAuthRequest().then((authAgent) => {
//       return authAgent
//         .get('/api/v1/users/admin-dashboard')
//         .expect(200)
//         .then((res) => {
//           expect(res.body).to.equal(42)
//         })
//     })
//   })

//   xit('hits a private route with supertest authentication and cookie', async () => {
//     return promisedCookie().then((cookie) => {
//       console.log('cookie is called', cookie)
//       const req = request(app)
//         .get('/api/v1/users/admin-dashboard') // change to 2 and this fails
//         .set('cookie', cookie)
//         .expect(200)
//         .then((res) => {
//           expect(res.body).to.equal(42)
//         })
//       return req
//     })
//   })
// })
