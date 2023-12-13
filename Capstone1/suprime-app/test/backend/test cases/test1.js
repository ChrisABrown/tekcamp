import { authEndpoints } from '../utils/variables.js'

export const apiAuthTests = (agent) => {
  let body
  let success

  test(`POST ${authEndpoints[2]}, should return new refreshToken for logged in user`, async () => {
    await agent
      .post(`${authEndpoints[2]}`)
      .expect(200)
      .then((res, err) => {
        if (err) console.error(err)
        body = res.body
        success = body.success

        expect(success).toEqual(true)
        expect(res.header['set-cookie']).toBeDefined()
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
    await agent.get(`${authEndpoints[4]}`).then((res, err) => {
      if (err) console.log(err)
      body = res.body
      expect(typeof body.userDetails).toBe('object')
      expect(body.message).toBeDefined()
    })
  })
}
