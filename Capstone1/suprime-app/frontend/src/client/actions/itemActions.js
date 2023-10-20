import {
  ITEM_DETAILS_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
} from '../constants/itemsConstants.js'
import DataService from '../services/data.service.js'

export const listItems = () => async (dispatch) => {
  try {
    dispatch({ type: ITEM_LIST_REQUEST })
    let items = await DataService.fetchItems()
    dispatch({ type: ITEM_LIST_SUCCESS, payload: items })
  } catch (e) {
    dispatch({
      type: ITEM_LIST_FAIL,
      payload: e.error && e.error.message ? e.data.message : e.data,
    })
  }
}
// export const listItemDetails = (sku) =>
//   wrapFn(async (dispatch, e, req, err, next) => {
//     dispatch({
//       type: ITEM_DETAILS_REQUEST,
//     })
//     sku = req.query.sku
//     e = await DataService.fetchItemBySku(sku)
//     dispatch({
//       type: ITEM_DETAILS_SUCCESS,
//       payload: e,
//     })
//     next(
//       dispatch({
//         type: ITEM_DETAILS_FAIL,
//         payload:
//           err.response && err.response.message
//             ? err.response.data.message
//             : err.message,
//       })
//     )
//   })
