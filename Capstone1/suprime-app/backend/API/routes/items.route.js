import { Router as expressRouter } from 'express'
import db from '../../db/conn.js'
import { ObjectId } from 'bson'
import Item from '../../DAO/models/Item.js'
import ItemsController from '../controllers/items.controller.js'

const router = expressRouter()
const base = '/'

router.get(base, ItemsController.apiGetItems)

//   .get(base + '/sku', ItemsController.apiGetItemBySku)
//   .post(base, ItemsController.apiPostItem)
// .put(base)
// .delete(base, ItemsController.apiDeleteItem)

router.get('/:id', async (req, res) => {
  try {
    let collection = await db.collection('Stock')
    let query = { _id: ObjectId(req.params.id) }
    let result = await collection.findOne(query)
    // !result ? res.send(result).status(200) : res.send('Not found').status(404)

    let found = {
      success: res.status === 200 ? false : true,
      data: result,
    }
    res.send(found).status(200)
  } catch (e) {
    res.send(e).status(400)
  }
})

router.post('/', async (req, res) => {
  try {
    let collection = db.collection('Stock')

    const newItem = new Item({
      itemId: req.body.itemId,
      quantity: req.body.qty,
      colors: req.body.colors,
      SKU: req.body.SKU,
      category: req.body.category,
      price: req.body.price,
      sizes: req.body.sizes,
      description: req.body.description,
      images: req.body.images,
    })
    let result = await collection.insertOne(newItem)

    res.send(result).status(204)
  } catch (err) {
    res.status(400).json('Error: ' + err.message)
  }
})

// router.put('/:id', async (req, res) => {
//   const { itemId, qty, category, price, sizes, description, imgs } = req.body

//   const filter = { _id: req.params._id }
//   const options = { upsert: true }
//   const updateDoc = {
//     $set: {
//       itemId: itemId,
//       qty: qty,
//       category: category,
//       price: price,
//       sizes: sizes,
//       description: description,
//       imgs: imgs,
//     },
//   }
//   try {
//     await db.updateOne(filter, updateDoc, options)
//   } catch (err) {
//     res.status(400).json('Error' + err)
//   }
// })

router.delete('/:id', async (req, res) => {
  const query = { _id: ObjectId(req.params._id) }
  const collection = db.collection('Stock')
  let result = await collection.deleteOne(query)

  try {
    result.deletedCount === 1
      ? console.log('Successfully deleted one item.')
      : console.log('No items matched the query. Deleted 0 items.')
  } catch (err) {
    res.status(400).json('Error: ' + err)
  }
})

export default router
