import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ItemSchema = new Schema(
  {
    itemId: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
    SKU: String,
    description: String,
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    size: Object,
  },
  { collection: 'Stock' }
)

const Item = mongoose.model('Item', ItemSchema)

export default Item
