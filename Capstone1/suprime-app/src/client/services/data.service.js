import axios from 'axios'

export const URL = 'https://localhost:4000'
export const getAll = '/api/items'
export const getBySKU = '/:SKU'

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const fetchItems = async () => {
  try {
    return await axiosInstance.get(getAll).then((items) => {
      return items.data
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

const fethchItemById = async (id) => {
  try {
    return await axiosInstance.get(`${getAll} + ${id}`)
  } catch (error) {
    return Promise.reject(error)
  }
}
