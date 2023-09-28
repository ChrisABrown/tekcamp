import Message from './models/Message.cjs'

let messages

export default class MessagesDAO {
  static async injectDB(conn) {
    if (messages) return

    try {
      messages = await conn.db(process.env.SUPRIME_DB_NS).collection('Messages')
    } catch (e) {
      console.error(`unable to connect in MessagesDAO: ${e}`)
    }
  }
  static async apiGetMessagesByType({
    filters = null,
    page = 0,
    messagesPerPage = 10,
  }) {
    let query
    if (filters) {
      if ('messageType' in filters) {
        query = {
          $text: {
            $search: filters['messageType'],
          },
        }
      }
    }
    let cursor
    try {
      cursor = await messages.find(query).limit(messagesPerPage)
      const messagesList = await cursor.toArray()
      const totalNumMessages = await messages.countDocuments(query)
      return { messagesList, totalNumMessages }
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { messagesList: [], totalNumMessages: 0 }
    }
  }

  static async getMessagesByTypeWithinLastWeek(createdOn) {
    try {
      return await messages.aggregate([
        {
          $match: {
            date: {
              $gte: new Date(createdOn.getTime() - 1000 * 3600 * 24 * 7),
              $lt: createdOn,
            },
          },
        },
        {
          $group: {
            _id: '$messageType',
            count: {
              $sum: 1,
            },
          },
        },
      ])
    } catch (error) {}
  }

  static async addMessage(message = {}) {
    message = new Message()
    try {
      const result = await Message.create(message)
      return { result }
    } catch (e) {
      console.error(`Unable to issue create command, ${e}`)
      return { result: {} }
    }
  }
}
