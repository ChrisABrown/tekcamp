import axios from 'axios'

export const URL = `${process.env.API_SERVER_URL}`
const endpoints = ['api/v1/items', 'api/v1/orders']

const items = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
})

const orders = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
})

const fetchAllOrders = async () => {
  try {
    return await orders.get(`${endpoints[1]}`).then((res) => {
      return res.data
    })
  } catch (e) {
    Promise.reject(e)
  }
}

const createOrder = async ({ order }) => {
  try {
    return await orders.post(`${endpoints[1]}`, { order }).then((res) => {
      return res.data
    })
  } catch (e) {
    Promise.reject(e)
  }
}

const deleteOrder = async (orderId) => {
  try {
    return await orders.delete(`${endpoints[1]}/:${orderId}`).then((res) => {
      return res.data
    })
  } catch (e) {
    Promise.reject(e)
  }
}

const fetchItems = async () => {
  try {
    return await items.get(`${endpoints[0]}`).then((res) => {
      return res.data.items
    })
  } catch (e) {
    Promise.reject(e)
  }
}

const fetchItemBySku = async (sku) => {
  try {
    return await items.get(`${endpoints[0]}/:${sku}`).then((res) => {
      return res.data
    })
  } catch (e) {
    Promise.reject(e)
  }
}

const addItem = async ({ item }) => {
  try {
    return await items
      .post(`${endpoints[0]}`, {
        item,
      })
      .then((res) => {
        return res.data
      })
  } catch (e) {
    Promise.reject(e)
  }
}

const updateItem = async (
  sku,
  { category, itemId, color, image, price, description, size }
) => {
  try {
    return await items
      .put(`${endpoints[0]}/:${sku}`, {
        category,
        itemId,
        color,
        image,
        price,
        description,
        size,
      })
      .then((res) => {
        return res.data
      })
  } catch (e) {
    Promise.reject(e)
  }
}

const deleteItem = async (sku) => {
  try {
    return await items.delete(`${endpoints[0]}/:${sku}`).then((res) => {
      return res.data
    })
  } catch (e) {}
}

const DataService = {
  fetchItems,
  fetchItemBySku,
  addItem,
  updateItem,
  deleteItem,
  fetchAllOrders,
  createOrder,
  deleteOrder,
}

export default DataService
