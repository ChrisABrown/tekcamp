import MessagesDAO from '../../DAO/messagesDAO.js'
import Message from '../../DAO/models/Message.cjs'

export default class MessagesController {
  static async apiPostMessage(req, res, next) {
    try {
      const messType = req.body.messageType
      const userInfo = {
        name: req.body.name,
        _id: req.body.user_id,
        email: req.body.email,
      }
      const messageBody = req.body.messageBody

      const orderNumber = await Message.findOne({ _id: req.body._id })
        .populate('order')
        .exec()

      const MessageResponse = await MessagesDAO.addMessage(
        new Message({
          order: orderNumber,
          messageType: messType,
          messageBody: messageBody,
          user: userInfo,
          createdOn: new Date(),
        })
      )

      req.json({ status: 'success' })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiGetMessage(req, res, next) {}
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
