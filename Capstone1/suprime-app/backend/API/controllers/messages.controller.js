import MessagesDAO from '../../DAO/messagesDAO.js'
import AppError from '../../utils/appError.js'
import { checkUser } from '../../utils/functions.js'

let err
let response = {}

export default class MessagesController {
  static async apiPostMessage(req, res, next) {
    try {
      const order = req.body.orderNum
      const messageType = req.body.messageType
      const userId = req.user._id
      const messageBody = req.body.messageBody

      const MessageResponse = await MessagesDAO.apiPostMessage(
        order,
        messageType,
        messageBody,
        userId
      )

      response = {
        status: 'error' in MessageResponse ? 'Fail' : 'Success',
        data: MessageResponse,
      }

      res.json(response)
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)
      res.json(
        (response = {
          error: `api: ${e}`,
          response: info(req.user),
        })
      )
    }
  }

  static async apiGetMessage(req, res, next) {
    try {
      const messagesPerPage = req.query.messagesPerPage
        ? parseInt(req.query.messagesPerPage)
        : 10
      const page = req.query.pge ? parseInt(req.query.page) : 0

      let filters = {}
      if (req.query.messageType || req.query.user) {
        filters.messageType = req.query.messageType
        filters.user = req.query.user
      }
      const { messagesList, totalNumMessages } =
        await MessagesDAO.apiGetMessagesByTypeOrUser({
          filters,
          page,
          messagesPerPage,
        })

      response = {
        messages: messagesList,
        page: page,
        filters: filters,
        messagesPerPage: messagesPerPage,
        totalNumMessages: totalNumMessages,
        message: `found ${totalNumMessages} ${req.query.messageType} messages`,
      }
      res.json(response)
    } catch (e) {
      err = new AppError(e.message, res.status)

      if (e) next(err) && res.json({ error: `${err}` })
    }
  }

  static async apiDeleteMessage(req, res, next) {
    checkUser(req.user)

    try {
      const messageId = req.query.message_id

      const MessageResponse = await MessagesDAO.apiDeleteMessage(messageId)

      res.send({
        status: res.status,
        data: MessageResponse,
        response: info(req.user),
      })
    } catch (e) {
      err = new AppError(e.message, res.status)
      next(err)

      res.send((response = { error: `api: ${e}`, response: info(req.user) }))
    }
  }
}
