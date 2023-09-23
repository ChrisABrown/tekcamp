const router = require('express').Router()

const Item = require('../../server/models/Item')

router.get('/', (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.post('/add', (req, res) => {
  const itemId = req.body.itemId
  const qty = req.body.quantity
  const category = req.body.category
  const price = req.body.price
  const sizes = req.body.sizes
  const description = req.body.description
  const imgs = req.body.images

  const newItem = new Item({
    itemId,
    qty,
    category,
    price,
    sizes,
    description,
    imgs,
  })

  newItem
    .save()
    .then((res) => res.json('New Item Added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.put('/:id', (req, res) => {
  Item.findById(req.params._id).then((item) => {
    item
      .update()
      .then(() => res.json({ success: true }))
      .catch((err) => res.status(400).json({ success: false }))
  })
})

router.delete('/:id', (req, res) => {
  Item.findById(req.params._id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(400).json({ success: false }))
})
module.exports = router
