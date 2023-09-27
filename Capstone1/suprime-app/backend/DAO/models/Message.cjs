const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MessageSchema = new Schema({
  order: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  user: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  messageType: { type: String, required: true },
  messageBody: { type: String, required: true },
  createdOn: { type: Date, default: Date.now, required: true },
})

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message
