import Message from './models/Message.js'
import User from './models/User.js'

export default class MessagesDAO {
  static async apiGetMessagesByTypeOrUser({
    filters = null,
    page = 0,
    messagesPerPage = 10,
  } = {}) {
    let query
    if (filters) {
      if ('messageType' in filters) {
        query = {
          messageType: {
            $eq: filters['messageType'],
          },
        }
      }
      if ('user' in filters) {
        query = {
          user: {
            $eq: filters['user'],
          },
        }
      }
    }
    try {
      const messagesList = await Message.find(query).limit(messagesPerPage)
      const totalNumMessages = await Message.countDocuments(query)

      return { messagesList, totalNumMessages }
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { messagesList: [], totalNumMessages: 0 }
    }
  }

  static async apiGetMessagesByTypeWithinLastWeek(createdOn) {
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

  static async apiPostMessage(order, messageType, messageBody, userId) {
    const message = new Message({
      messageType: messageType,
      order: order,
      user: userId,
      messageBody: messageBody,
    })
    try {
      await User.findOne({ _id: userId }).then((user) => {
        user.messages.push(message)
        user.save().then((err) => {
          if (err) return { error: err }
        })
      })

      return await Message.create(message)
    } catch (e) {
      console.error(`Unable to issue create command, ${e}`)
      return { error: e }
    }
  }

  static async apiDeleteMessage(messageId) {
    try {
      let filter = { 'messages._id': messageId }

      return await User.findOne(filter).then((user) => {
        let messagesList = user.messages
        const messageIndex = user.messages.findIndex(
          (item) => item._id.toString() === messageId
        )
        if (messageIndex === -1) return { message: 'messageId not found' }
        const messageToBeDeleted = messagesList[messageIndex]._id.toString()
        if (messageToBeDeleted === messageId) {
          messagesList.pull(messagesList[messageIndex])
          user.save()
          Message.findOneAndDelete({ _id: messageId }).exec()
          return messagesList
        }
        return { message: `no message found with id: ${messageId}` }
      })
    } catch (e) {
      console.error(`unable to delete message: ${e}`)
      return { error: e }
    }
  }
}
