import Message from './models/Message.js'
import mongodb from 'mongodb'

export default class MessagesDAO {
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
      cursor = await Message.find(query).limit(messagesPerPage)
      const messagesList = await cursor.toArray()
      const totalNumMessages = await Message.countDocuments(query)
      return { messagesList, totalNumMessages }
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { messagesList: [], totalNumMessages: 0 }
    }
  }

  static async getMessagesByTypeWithinLastWeek(createdOn) {
    try {
      return await Message.aggregate([
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
    } catch (error) {
      console.error(`unable to find messages`)
      return { messagesList: [], totalNumMessages: 0 }
    }
  }

  static async addMessage(order, messType, messageBody, date, userInfo) {
    const message = new Message({
      messageType: messType,
      order: order._id,
      user: userInfo._id,
      messageBody: messageBody,
      createdOn: date,
    })
    try {
      return await Message.create(message)
    } catch (e) {
      console.error(`Unable to issue create command, ${e}`)
      return { error: e }
    }
  }

  static async deleteMessage(messageId, userId) {
    try {
      const deleteResponse = await Message.deleteOne({
        _id: ObjectId(messageId),
        user: ObjectId(userId),
      })

      return deleteResponse
    } catch (e) {
      console.error(`unable to delete review: ${e}`)
      return { error: e }
    }
  }
}
