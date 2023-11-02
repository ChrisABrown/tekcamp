import Message from './models/Message.cjs'
import mongodb from 'mongodb'

let messages

const ObjectId = mongodb.ObjectId

export default class MessagesDAO {
  'use strict'

  static async injectDB(conn) {
    if (messages) return

    try {
      messages = await conn.db(process.env.SUPRIME_DB_NS).collection('Messages')
    } catch (e) {
      console.error(
        `unable to establish connection handle in MessagesDAO: ${e}`
      )
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
