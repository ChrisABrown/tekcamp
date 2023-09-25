import { Router as expressRouter } from 'express'
import Item from '../../models/Item.cjs'
import { items as db } from '../../server.js'

const router = expressRouter()

router.get('/', async (req, res) => {
  const cursor = db.find({})
  const allValues = await cursor.toArray()
  let result = {
    success: res.status === 200 ? false : true,
    data: allValues,
  }
  try {
    res.send(result).status(200)
  } catch (error) {
    res.send(error).status(400)
  }
})

router.post('/add', async (req, res) => {
  const itemId = req.body.itemId
  const qty = req.body.quantity
  const category = req.body.category
  const price = req.body.price
  const sizes = req.body.sizes
  const description = req.body.description
  const imgs = req.body.images

  const newItem = new Item({
    itemId: itemId,
    SKU: req.params.id,
    qty: qty,
    category: category,
    price: price,
    sizes: sizes,
    description: description,
    imgs: imgs,
  })
  const query = {
    itemId: newItem.itemId,
  }
  const filter = { _id: req.params.id }
  const options = { upsert: true }

  try {
    if (db.findOne(query) === null) db.insertOne(newItem)
    await db.updateOne(filter, newItem, options)
  } catch (err) {
    res.status(400).json('Error: ' + err)
  }
})

router.put('/:id', async (req, res) => {
  const itemId = req.body.itemId
  const qty = req.body.quantity
  const category = req.body.category
  const price = req.body.price
  const sizes = req.body.sizes
  const description = req.body.description
  const imgs = req.body.images

  const filter = { _id: req.params.id }
  const options = { upsert: true }
  const updateDoc = {
    $set: {
      itemId: itemId,
      qty: qty,
      category: category,
      price: price,
      sizes: sizes,
      description: description,
      imgs: imgs,
    },
  }
  try {
    await db.updateOne(filter, updateDoc, options)
  } catch (err) {
    res.status(400).json('Error' + err)
  }
})

router.delete('/:id', async (req, res) => {
  const query = { _id: req.params.id }
  const result = await db.deleteOne(query)

  try {
    if (result.deletedCount === 1) console.log('Successfully deleted one item.')
    console.log('No items matched the query. Deleted 0 items.')
  } catch (err) {
    res.status(400).json('Error: ' + err)
  }
})

export default router
