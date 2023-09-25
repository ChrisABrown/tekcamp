const mongoose = require('mongoose')

const schema = mongoose.Schema

class Order {
  user = String
  billingAddress = Object
}

schema.loadClass(Order)
module.exports = { Order }
