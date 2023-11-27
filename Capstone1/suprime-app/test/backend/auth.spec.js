import app from '../../backend/index.js'
import { admin as _admin } from './data/auth.test.data.js'
import { describe } from 'mocha'
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe('Auth tests for authenticating users', (body, token) => {
  it('should respond with statusCode 200, adding a user to the database', async function () {
    this.timeout(6000)

    const res = chai
      .request(app)
      .post('/api/v1/users/signup')
      .send(_admin)
      .end((err, res) => {
        if (err) console.error(err)
        body = res.body
        token = body.token
        expect(res.statusCode).to.be.equal(200)
        expect(body.status).to.be.equal('Success')
      })
  })
})
