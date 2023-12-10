import request from 'supertest'
import { authEndpoints } from '../utils/variables.js'
import app from '../../../backend/index.js'
import { mockUser } from '../data/auth.test.data.js'

export const apiAuthTests = () => {
  let body
  let success
  let token

  const agent = request.agent(app)

  test(`POST ${authEndpoints[0]}, should create new user and return token`, async () => {
    await agent
      .post(`${authEndpoints[0]}`)
      .expect(200)
      .send(mockUser)
      .then((res) => {
        body = res.body
        success = body.success
        token = body.token
        expect(success).toBe(true)
        expect(body).toHaveProperty('token')
        expect(res.get('Set-Cookie')).toBeDefined()
      })
  })

  test(`POST ${authEndpoints[1]}, should login user and return token`, async () => {
    await agent
      .post(`${authEndpoints[1]}`)
      .send({
        username: mockUser.username,
        password: mockUser.password,
      })
      .then((res) => {
        body = res.body
        token = body.token
        expect(body).toHaveProperty('token')
      })
  })

  test(`POST ${authEndpoints[2]}, should return new refreshToken for logged in user`, async () => {
    await agent
      .post(`${authEndpoints[2]}`)
      .set('Cookie', `refreshToken=${token}`)
      .expect(200)
      .then((res, err) => {
        if (err) console.error(err)
        body = res.body
        success = body.success
        token = body.token
        expect(res.header['set-cookie']).toBeDefined()
        expect(success).toEqual(true)
        expect(token).toEqual(token)
      })
  })

  test(`GET ${authEndpoints[3]}, should clear user refreshToken on user logout`, async () => {
    const _expected = [
      'refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
    ]
    await agent
      .get(`${authEndpoints[3]}`)
      .expect(200)
      .then((res, err) => {
        if (err) console.error(err)
        const cookies = res.headers['set-cookie']
        body = res.body

        expect(body.success).toBe(true)
        expect(cookies).toEqual(_expected)
      })
  })

  test(`GET ${authEndpoints[4]}, should return logged in user details`, async () => {
    await agent
      .get(`${authEndpoints[4]}`)
      .expect(200)
      .then((res, err) => {
        if (err) console.error(err)
        body = res.body
        expect(body.userDetails).ToBe(Object)
      })
  })
}
