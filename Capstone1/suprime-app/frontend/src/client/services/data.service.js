import axios from 'axios'

export const URL = `${process.env.REACT_APP_API_SERVER_URL}`
const itemsEndpoint = 'api/v1/items'

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const fetchItems = async () => {
  try {
    return await axiosInstance.get(`${URL}${itemsEndpoint}`).then((res) => {
      return res.data.items
    })
  } catch (e) {
    Promise.reject(e)
  }
}

const fetchItemBySku = async (sku) => {
  try {
    return await axiosInstance
      .get(`${URL}${itemsEndpoint}/sku/:${sku}`)
      .then((res) => {
        return res.data.item
      })
  } catch (e) {
    Promise.reject(e)
  }
}

const DataService = {
  fetchItems,
  fetchItemBySku,
}

export default DataService
