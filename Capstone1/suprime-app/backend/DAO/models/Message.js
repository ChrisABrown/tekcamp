import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MessageSchema = new Schema(
  {
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    messageType: {
      type: String,
      enum: ['press', 'general inquiries', 'order status inquiries'],
      required: true,
      default: 'general inquiries',
    },
    messageBody: { type: String, required: true },
  },
  { timestamps: true }
)

const Message = mongoose.model('Message', MessageSchema)

export default Message
