import * as types from './type';

export function getMintChooseRequest() {
  return {
    type: types.MINNT_CHOOSE_REQUEST,
  }
}

export function getMintChooseSuccess(data) {
  return {
    type: types.MINNT_CHOOSE_SUCCESS,
    data,
  }
}

export function getMintFeeRequest(data) {
  return {
    type: types.MINT_FEE_REQUEST,
    data
  }
}

export function getMintFeeSuccess (data) {
  console.log(data, 'data');
  return {
    type: types.MINT_FEE_SUCCESS,
    data,
  }
}

export function onMintRequest(data) {
  console.log(data, 'data');
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

export function onSelectItem(data) {
  return {
    type: types.SELECT_ITEM,
    data
  }
}