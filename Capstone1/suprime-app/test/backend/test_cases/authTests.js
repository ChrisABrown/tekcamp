import { authEndpoints } from '../utils/variables.js'
import { updateUser } from '../data/auth.test.data.js'
import { signInAdmin } from '../utils/setup.js'

export const apiAuthTests = (agent) => {
  let body

  beforeEach(async () => {
    await signInAdmin(agent)
  })

  test(`GET ${authEndpoints[4]}, should return logged in user details`, async () => {
    await agent.get(`${authEndpoints[4]}`).then((res, err) => {
      if (err) console.log(err)
      body = res.body
      expect(typeof body.userDetails).toBe('object')
      expect(body.message).toBeDefined()
    })
  })

  test(`GET ${authEndpoints[5]}, should allow access to admin users and return list of users`, async () => {
    await agent.get(`${authEndpoints[5]}`).then((res, err) => {
      if (err) console.log(err)
      body = res.body
      expect(body).toHaveProperty('users')
      expect(typeof body.users).toBe('object')
      expect(body.total_users).toEqual(body.users.length)
    })
  })

  test(`GET ${authEndpoints[5]}, should return list of all users based on role `, async () => {
    await agent
      .get(`${authEndpoints[5]}`)
      .query({ role: 'employee' })
      .then((res, err) => {
        if (err) console.log(err)
        body = res.body
        expect(body).toHaveProperty('users')
        expect(typeof body.users).toBe('object')
        expect(body.total_users).toEqual(body.users.length)
      })

    await agent
      .get(`${authEndpoints[5]}`)
      .query({ role: 'admin' })
      .then((res, err) => {
        if (err) console.log(err)
        body = res.body
        expect(body).toHaveProperty('users')
        expect(typeof body.users).toBe('object')
        expect(body.total_users).toEqual(1)
      })

    await agent
      .get(`${authEndpoints[5]}`)
      .query({ role: 'user' })
      .then((res, err) => {
        if (err) console.log(err)
        body = res.body
        expect(body).toHaveProperty('users')
        expect(typeof body.users).toBe('object')
        expect(body.total_users).toEqual(body.users.length)
      })
  })

  test(`DELETE ${authEndpoints[5]}, should delete user based off input username`, async () => {
    let delId
    await agent
      .get(`${authEndpoints[4]}`)
      .query({ username: 'Delete' })
      .then((res, err) => {
        if (err) console.log(err)
        body = res.body
        delId = body._id
      })

    await agent
      .delete(`${authEndpoints[5]}`)
      .query({ _id: delId })
      .then((res, err) => {
        if (err) console.log(err)
        body = res.body
        expect(delId).toEqual(body.userId)
      })
  })

  test(`POST ${authEndpoints[2]}, should return new refreshToken for logged in user`, async () => {
    const refTokenResponse = await agent.post(`${authEndpoints[2]}`)

    expect(refTokenResponse.body.success).toEqual(true)
    expect(refTokenResponse.header['set-cookie']).toBeDefined()
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

  //Must be last test run, so BeforeEach runs properly
  test(`PUT ${authEndpoints[4]}, should update user info for logged in user only`, async () => {
    await agent
      .put(`${authEndpoints[4]}`)
      .send({ user: updateUser })
      .then((res, err) => {
        if (err) console.log(err)
        body = res.body
        expect(body.user).not.toMatchObject(updateUser)
        expect(body.user._id).toBe(body.updatedUser._id)
      })
  })
}
