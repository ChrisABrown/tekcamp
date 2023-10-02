import { Router as expressRouter } from 'express'
import ItemsController from '../controllers/items.controller.js'

const router = expressRouter()
const base = '/'

router
  .get(base, ItemsController.apiGetItems)
  .get(base + '/sku', ItemsController.apiGetItemBySku)
  .post(base, ItemsController.apiPostItem)
  // .put(base)
  .delete(base, ItemsController.apiDeleteItem)

// router.get('/', async (req, res) => {
//   const cursor = db.find({})
//   const allValues = await cursor.toArray()
//   let result = {
//     success: res.status === 200 ? false : true,
//     data: allValues,
//   }
//   try {
//     res.send(result).status(200)
//   } catch (error) {
//     res.send(error).status(400)
//   }
// })

// router.get('/:id', async (req, res, next) => {
//   try {
//     let id = req.params.id || {}
//     const cursor = await db.findOne({ _id: id })

//     let found = {
//       success: res.status === 200 ? false : true,
//       data: cursor,
//     }
//     res.send(found).status(200)
//   } catch (error) {
//     res.send(error).status(400)
//   }
// })

// router.post('/', async (req, res) => {
//   const newItem = new Item({
//     itemId: req.body.itemId,
//     quantity: req.body.qty,
//     colors: req.body.colors,
//     SKU: req.body.SKU,
//     category: req.body.category,
//     price: req.body.price,
//     sizes: req.body.sizes,
//     description: req.body.description,
//     images: req.body.images,
//   })
//   const item = await newItem.save()
//   let result = {
//     success: res.status === 200 ? false : true,
//     data: item,
//   }

//   try {
//     res.status(200).json(result.data)
//   } catch (err) {
//     res.status(400).json('Error: ' + err.message)
//   }
// })

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

// router.delete('/:id', async (req, res) => {
//   const query = { _id: req.params._id }
//   const result = await db.deleteOne(query)

//   try {
//     if (result.deletedCount === 1) console.log('Successfully deleted one item.')
//     console.log('No items matched the query. Deleted 0 items.')
//   } catch (err) {
//     res.status(400).json('Error: ' + err)
//   }
// })

export default router
