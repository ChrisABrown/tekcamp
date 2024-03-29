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
    SKU: Number,
    description: String,
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: Object,
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

module.exports = Item
