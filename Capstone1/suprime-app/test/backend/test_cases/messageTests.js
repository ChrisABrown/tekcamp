import { signInAdmin, signOut } from '../utils/setup'
import { messageEndpoint } from '../utils/variables'
import { pressMessage } from '../data/message.test.data'

export const apiMessageTests = (agent) => {
  beforeEach(async () => {
    const admin = await signInAdmin(agent)
    console.log(admin)
  })

  afterEach(async () => {
    await signOut(agent)
  })

  test(`POST ${messageEndpoint}, should post new message for signed in user`, async () => {
    const body = await agent.post(`${messageEndpoint}`).send(pressMessage)
  })

  test(`GET ${messageEndpoint}, should return messages for signed in user`, async () => {
    const message_types = ['press', 'general inquiries', 'order inquiries']
    const randomType =
      message_types[Math.floor(Math.random * message_types.length)]

    const { body } = await agent
      .get(`${messageEndpoint}`)
      .query({ messageType: randomType })

    console.log(body)
  })
}
