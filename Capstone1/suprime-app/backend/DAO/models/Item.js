import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

const Schema = mongoose.Schema

const ItemSchema = new Schema({
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
  SKU: {
    type: String,
    required: true,
    default: () => nanoid(5),
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  size: Object,
})

const Item = mongoose.model('Item', ItemSchema)

export default Item
