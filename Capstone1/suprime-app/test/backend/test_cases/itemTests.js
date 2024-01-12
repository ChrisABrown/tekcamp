import { itemEndpoint } from '../utils/variables'

export const apiItemTests = (agent) => {
  const SKU = []
  let items

  test(`GET ${itemEndpoint}, returns all items`, async () => {
    const { body } = await agent.get(`${itemEndpoint}`)
    items = body.items
    for (const item of items) {
      SKU.push(item.SKU)
    }

    expect(typeof body.items).toBe('object')
    expect(body).toHaveProperty('filters')
    expect(body.filters).toEqual({})
  })

  test(`GET ${itemEndpoint}, returns item with specific SKU`, async () => {
    const randomSKU = SKU[Math.floor(Math.random() * SKU.length)]

    const { body } = await agent
      .get(`${itemEndpoint}`)
      .query({ sku: randomSKU })

    expect(typeof body.foundItem).toBe('object')
    expect(body).toHaveProperty('filter')
    expect(body.filter).toEqual({ sku: `${randomSKU}` })
  })
}
