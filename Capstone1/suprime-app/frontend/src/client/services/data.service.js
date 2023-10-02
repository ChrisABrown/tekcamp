import axios from 'axios'
import { tryCatchWrapper as wrapFn } from '../../wrapperFn'

export const URL = 'http://localhost:4000/'
const itemsEndpoint = 'api/v1/items'

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const fetchItems = () =>
  wrapFn(async (res, next) => {
    let items
    if (items) return
    items = await axiosInstance.get(itemsEndpoint)
    res = items
    next()
    return res
  })

const fetchItemBySku = (sku) =>
  wrapFn(async (res, next) => {
    let item
    item = await axiosInstance.get(itemsEndpoint + `/${sku}`)
    res = item
    next()
    return item
  })

const DataService = {
  fetchItems,
  fetchItemBySku,
}

export default DataService
