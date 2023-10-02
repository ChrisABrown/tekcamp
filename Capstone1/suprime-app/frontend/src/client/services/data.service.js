import axios from 'axios'
import { tryCatchWrapper as wrapFn } from '../../../../wrapperFn'

export const URL = 'http://localhost:4000/'
const itemsEndpoint = 'api/v1/items'

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const fetchItems = wrapFn(async (next) => {
  let items
  if (items) return
  items = await axiosInstance.get(itemsEndpoint)
  next()
  return items
})

const fetchItemBySku = wrapFn(async (sku, next) => {
  let item
  item = await axiosInstance.get(itemsEndpoint + `/${sku}`)
  next()
  return item
})

const DataService = {
  fetchItems,
  fetchItemBySku,
}

export default DataService
