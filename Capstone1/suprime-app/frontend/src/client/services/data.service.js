import axios from 'axios'
import { tryCatchWrapper as wrapFn } from '../../wrapperFn'

let port = process.env.SERVER_PORT || 4100

export const URL = `http://localhost:${port}/`
const itemsEndpoint = 'api/v1/items'

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const fetchItems = async () => {
  // wrapFn(async (res, next) => {
  try {
    return await axiosInstance.get(`${URL}${itemsEndpoint}`).then((res) => {
      return res.data.items
    })
  } catch (error) {
    Promise.reject(error)
  }
}

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
