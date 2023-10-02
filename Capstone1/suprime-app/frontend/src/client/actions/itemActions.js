import {
  ITEM_DETAILS_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
} from '../constants/itemsConstants'
import DataService from '../services/data.service'
import { tryCatchWrapper as wrapFn } from '../../../../wrapperFn'

export const listItems = () =>
  wrapFn(async (dispatch, res, err, next) => {
    dispatch({ type: ITEM_LIST_REQUEST })
    res = await DataService.fetchItems()

    dispatch({ type: ITEM_LIST_SUCCESS, payload: res })

    next(
      dispatch({
        type: ITEM_LIST_FAIL,
        payload:
          err.response && err.response.message
            ? err.response.data.message
            : err.message,
      })
    )
  })
export const listItemDetails = (sku) =>
  wrapFn(async (dispatch, res, req, err, next) => {
    dispatch({
      type: ITEM_DETAILS_REQUEST,
    })
    sku = req.query.sku
    res = await DataService.fetchItemBySku(sku)
    dispatch({
      type: ITEM_DETAILS_SUCCESS,
      payload: res,
    })
    next(
      dispatch({
        type: ITEM_DETAILS_FAIL,
        payload:
          err.response && err.response.message
            ? err.response.data.message
            : err.message,
      })
    )
  })
