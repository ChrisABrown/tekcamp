import { signInEmployee, signOut } from '../utils/setup'
import { messageEndpoint } from '../utils/variables'
import { pressMessage } from '../data/message.test.data'

export const apiMessageTests = (agent) => {
  beforeEach(async () => {
    await signInEmployee(agent)
  })

  afterEach(async () => {
    await signOut(agent)
  })

  test(`POST ${messageEndpoint}, should post new message for signed in user`, async () => {
    const { body } = await agent.post(`${messageEndpoint}`).send(pressMessage)

    let status = body.status
    let data = body.data

    expect(status).toBe('Success')
    expect(typeof data).toBe('object')
    expect(data[0].messageBody).toEqual(pressMessage.messageBody)
  })

  test(`GET ${messageEndpoint}, should return messages for signed in user`, async () => {
    const message_types = ['press', 'general inquiries', 'order inquiries']
    const randomType =
      message_types[Math.floor(Math.random() * message_types.length)]

    const { body } = await agent
      .get(`${messageEndpoint}`)
      .query({ messageType: randomType })

    let messages = body.messages
    let filters = body.filters
    let totalNumMessages = body.totalNumMessages

    expect(messages).toBe('object')
    expect(filters).toEqual({ messageType: randomType })
    expect(totalNumMessages).toEqual(body.messages.length)
  })
}
