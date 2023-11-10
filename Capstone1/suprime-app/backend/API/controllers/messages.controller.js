import MessagesDAO from '../../DAO/messagesDAO.js'
import AppError from '../../appError.js'
import { ObjectId } from 'mongodb'

export default class MessagesController {
  static async apiPostMessage(req, res, next) {
    if (!req.user)
      res
        .status(404)
        .json({ status: 'fail', message: 'Must be logged in to post message' })
    try {
      const order = new ObjectId()
      const messageType = req.body.messageType
      const userId = req.user._id
      const messageBody = req.body.messageBody

      const MessageResponse = await MessagesDAO.addMessage(
        order,
        messageType,
        messageBody,
        userId
      )
      res.send({ status: 'success', data: MessageResponse })
    } catch (e) {
      next(new AppError(e.message, res.status))
    }
  }

  static async apiGetMessage(req, res, next) {
    const messagesPerPage = req.query.messagesPerPage
      ? parseInt(req.query.messagesPerPage)
      : 10
    const page = req.query.pge ? parseInt(req.query.page) : 0

    let filters = {}
    if (req.query.messageType) {
      filters.messageType = req.query.messageType
    }
    const { messagesList, totalNumMessages } =
      await MessagesDAO.apiGetMessagesByType({ filters, page, messagesPerPage })

    let response = {
      messages: messagesList,
      page: page,
      filters: filters,
      messagesPerPage: messagesPerPage,
      totalNumMessages: totalNumMessages,
    }

    res.json(response)
  }

  static async apiDeleteMessage(req, res, next) {
    try {
      const messageId = req.body.message_id
      const userId = req.body.user_id

      const MessageResponse = await MessagesDAO.deleteMessage(messageId, userId)

      res.json({ status: 'success', data: MessageResponse })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
