import { signInAdmin } from '../utils/setup'
import { messageEndpoint } from '../utils/variables'

export const apiMessageTests = (agent) => {
  beforeEach(async () => {
    await signInAdmin(agent)
  })
  test(`GET ${messageEndpoint}, should return messages for signed in user`, async () => {
    const message_types = ['press', 'general inquiries', 'order inquiries']
    const randomType =
      message_types[Math.floor(Math.random * message_types.length)]

    const { body } = await agent.get(`${messageEndpoint}`)

    console.log(body)
  })
}
