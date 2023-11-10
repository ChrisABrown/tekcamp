import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CartItem = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL', 'XXL'],
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  SKU: String,
})

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
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
      type: [CartItem],
      required: true,
    },
    orderTotal: Number,
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', OrderSchema)

export default Order
