import {
  ITEM_DETAILS_FAIL,
  ITEM_DETAILS_REQUEST,
  ITEM_DETAILS_SUCCESS,
  ITEM_LIST_FAIL,
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
} from '../constants/itemsConstants'
import DataService from './services/data.service.js'
import {tryCatchWrapper as wrapFn} from '../../../../wrapperFn'

export const listItems = async wrapFn((dispatch) => {
  
})
export const listItemsDetails = () => {}
