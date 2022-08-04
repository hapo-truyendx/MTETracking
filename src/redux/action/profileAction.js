import * as types from './type';

export function getProfileRequest() {
  return {
    type: types.PROFILE_REQUEST,
  };
}

export function getProfileSuccess(data) {
  return {
    type: types.PROFILE_SUCCESS,
    data,
  }
}

export function getTransactionRequest(data) {
  return {
    type: types.TRANSACTION_REQUEST,
    data,
  }
}

export function getTransactionSuccess(data) {
  return {
    type: types.TRANSACTION_SECCESS,
    data,
  }
}