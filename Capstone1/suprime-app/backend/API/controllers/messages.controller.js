import MessagesDAO from '../../DAO/messagesDAO.js'
export default class MessagesController {
  static async apiPostMessage(req, res, next) {
    try {
      const orderNum = req.body.orderNum
      const date = new Date()
      const messType = req.body.messageType
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
        email: req.body.email,
      }
      const messageBody = req.body.messageBody

      const MessageResponse = await MessagesDAO.addMessage({
        orderNum,
        messType,
        messageBody,
        date,
        userInfo,
      })

      req.json({ status: 'success' })
    } catch (e) {
      res.status(500).json({ error: e.message })
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

      const MessageResponse = await MessagesDAO.apiDeleteMessage(
        messageId,
        userId
      )

      res.json({ status: 'success' })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}
