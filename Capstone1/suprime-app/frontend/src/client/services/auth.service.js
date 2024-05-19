import axios from 'axios'
import { URL } from './data.service'

const axiosInstance = axios.create({
  baseURL: URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
})

const userEndpoint = 'api/v1/users'

const fetchAllUsers = async () => {
  try {
    return await axiosInstance.get(`${URL}/admin-dashboard`)
  } catch (e) {
    Promise.reject(e)
  }
}

const userLogin = async (username, password) => {
  try {
    return await axiosInstance
      .post(`${userEndpoint}/login`, {
        username,
        password,
      })
      .then((res) => {
        return res.data
      })
  } catch (e) {
    return Promise.reject(e)
  }
}

const userLogout = async () => {
  try {
    return await axiosInstance.get(`${URL}/logout`).then((res) => {
      return res.data
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

const userRegister = async (username, role, email, password) => {
  try {
    return await axiosInstance.post(`${URL}/signup`, {
      username,
      role,
      email,
      password,
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

const userDetails = async () => {
  try {
    return await axiosInstance.get(`${URL}/user`).then((res) => {
      return res
    })
  } catch (error) {
    return console.log(error)
  }
}

const updateUser = async (username, email, profile) => {
  try {
    return await axiosInstance.put(`${URL}/user`, {
      username,
      email,
      profile,
    })
  } catch (e) {}
}

// const newUserDetails = async (username, user) => {
//   const userDetails = `user/${username}`

//   const { firstName, lastName, email, password } = user
//   try {
//     const res = await axiosInstance.put(userDetails, {
//       firstName,
//       lastName,
//       email,
//       password,
//     })

//     return res.data.data
//   } catch (error) {
//     return Promise.reject(error)
//   }
// }

const AuthService = {
  userRegister,
  userDetails,
  userLogin,
  userLogout,
  updateUser,
  fetchAllUsers,
  // newUserDetails,
}
export default AuthService
