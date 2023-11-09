import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  billing: {
    address: {
      street1: String,
      street2: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
  },
  shipping: {
    address: {
      street1: String,
      street2: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
  },
  items: {
    type: [
      {
        type: ObjectId,
        ref: 'Item',
      },
    ],
  },
  orderTotal: Number,
})

const Order = mongoose.model('Order', OrderSchema)

export default Order
