const mongoose = require('mongoose')

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
    colors: {
      type: Array,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sizes: Object,
  },
  { collection: 'Stock' }
)
const Item = mongoose.model('Item', ItemSchema)

module.exports = { Item }
