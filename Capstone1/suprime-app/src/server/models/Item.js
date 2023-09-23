const mongoose = require('mongoose')

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
  colors: {
    type: Array,
    required: true,
  },
  description: String,
  SKU: this._id,
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
})
const Item = mongoose.model('Item', ItemSchema)

module.exports = Item
