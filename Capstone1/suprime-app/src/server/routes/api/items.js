import { Router as expressRouter } from 'express'
import Item from '../../models/Item.cjs'
import { items as db } from '../../server.js'

const router = expressRouter()

router.get('/', async (req, res, next) => {
  await db.find()
})

// router.post('/add', (req, res) => {
//   const itemId = req.body.itemId
//   const qty = req.body.quantity
//   const category = req.body.category
//   const price = req.body.price
//   const sizes = req.body.sizes
//   const description = req.body.description
//   const imgs = req.body.images

//   const newItem = new Item({
//     itemId,
//     qty,
//     category,
//     price,
//     sizes,
//     description,
//     imgs,
//   })

//   newItem
//     .save()
//     .then((res) => res.json('New Item Added!'))
//     .catch((err) => res.status(400).json('Error: ' + err))
// })

// router.put('/:id', (req, res) => {
//   findById(req.params._id).then((item) => {
//     item
//       .update()
//       .then(() => res.json({ success: true }))
//       .catch((err) => res.status(400).json({ success: false }))
//   })
// })

// router.delete('/:id', (req, res) => {
//   findById(req.params._id)
//     .then((item) => item.remove().then(() => res.json({ success: true })))
//     .catch((err) => res.status(400).json({ success: false }))
// })

export default router
