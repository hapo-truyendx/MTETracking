import * as types from './type';

export function getMintChooseRequest() {
  return {
    type: types.MINNT_CHOOSE_REQUEST
  }
}

export function getMintChooseSuccess(data) {
  return {
    type: types.MINNT_CHOOSE_SUCCESS,
    data,
  }
}

export function getMintFeeRequest() {
  return {
    type: types.MINT_FEE_REQUEST,
  }
}

export function getMintFeeSuccess (data) {
  return {
    type: types.MINT_FEE_SUCCESS,
    data,
  }
}

export function onMintRequest(data) {
  return  {
    type: types.MINT_REQUEST,
    data,
  }
}

export function onMintSuccess(data) {
  return {
    type: types.MINT_SUCCESS,
    data,
  }
}