import axios from 'axios'

export const URL = ''

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'proxy',
  },
})

const itemAxios = axios.create({
  baseURL: URL,
  withCredentials: true,
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
})

const fetchItems = async () => {
  try {
    return await axiosInstance.get('items').then((res) => {
      return res.data.data
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

const DataService = {
  fetchItems,
}

export default DataService
