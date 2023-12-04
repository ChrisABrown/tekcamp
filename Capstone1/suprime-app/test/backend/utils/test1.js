import request from 'supertest'
import app from '../../../backend/index.js'
import { mockUser } from '../data/auth.test.data.js'

export const apiAuthTests = (body, token, success, status, headers) => {
  let res
  test('POST /api/v1/users/signup', async () => {
    res = await request(app)
      .post('/api/v1/users/signup')
      .expect(200)
      .send(mockUser)

    body = res.body
    success = body.success
    token = body.token
    expect(success).toBe(true)
    expect(body).toHaveProperty('token')
  })

  test('POST /api/v1/users/login', async () => {
    res = await request(app).post('/api/v1/users/login').send({
      username: mockUser.username,
      password: mockUser.password,
    })
    body = res.body
    token = body.token
    expect(body).toHaveProperty('token')
  })

  test('POST /api/v1/users/refreshToken', async () => {
    res = await request(app)
      .post('/api/v1/users/refreshToken')
      .set('Cookie', `refreshToken=${token}`)
      .then((res) => {
        body = res.body

        expect(res.status).toBe(200)
        expect(token).toEqual(`${token}`)
        expect(body).toHaveProperty('success', true)
        expect(res.headers['set-cookie']).toBeDefined()
      })
  })

  test('Unauthorized POST /api/v1/users/refreshToken', async () => {
    res = await request(app)
      .post('/api/v1/users/refreshToken')
      .set('Cookie', 'refreshToken=refreshToken')
    status = res.status

    expect(status).toBe(200)
    expect(body).toHaveProperty('message', 'Unauthorized: no refreshToken')
    expect(headers['set-cookie']).toBeUndefined()
  })

  test('Unauthorized POST /api/v1/users/refreshToken', async () => {
    const _mockUser = {
      refreshToken: [{ refreshToken: 'fake' }],
    }
    res = await request(app)
      .post('/api/v1/users/refreshToken')
      .set('Cookie', `refreshToken=${_mockUser.refreshToken.refreshToken}`)
    body = res.body
    status = res.status

    expect(status).toBe(200)
    expect(body).toHaveProperty('message', 'Unauthorized')
  })
}
