const router = require('express').Router

const Item = require('../../server/models/Item')

router.route('/').get((req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/add').post((req, res) => {
  const itemId = req.body.itemId
  const qty = req.body.quantity
  const category = req.body.category
  const price = req.body.price
  const description = req.body.description
  const imgs = req.body.images
  const newItem = new Item({
    itemId,
    qty,
    category,
    price,
    description,
    imgs,
  })

  newItem
    .save()
    .then((res) => res.json('New Item Added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
