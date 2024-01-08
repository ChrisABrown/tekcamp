export const apiItemTests = (agent) => {
  let body
  test('GET /api/v1/items', async () => {
    await agent.get('/api/v1/items').then((res) => {
      expect(res.statusCode).toBe(200)
    })
  })
}
