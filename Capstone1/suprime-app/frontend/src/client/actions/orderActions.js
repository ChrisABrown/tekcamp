import {
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
} from '../constants/orderConstants'
import DataService from '../services/data.service'

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const res = await DataService.createOrder(order).then((res) => {
      if (res.user.username === `${userInfo.username}`) {
        return res
      }
    })

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: res,
    })

    localStorage.setItem('order', JSON.stringify(res))
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.message
          ? error.response.data.message
          : error.message,
    })
  }
}
