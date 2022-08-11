import * as types from './type';

export function getListSneakerRequest() {
  
  return {
    type: types.SNEAKER_LIST_REQUEST
  }
}

export function getListSneakerSuccess(data) {
  return {
    type: types.SNEAKER_LIST_SUCCESS,
    data
  }
}

export function getDetailRequest(data) {
  return {
    type: types.SNEAKER_DETAIL_REQUEST,
    data,
  }
}

export function getDetailSuccess(data) {
  return {
    type: types.SNEAKER_DETAIL_SUCCESS,
    data
  }
}