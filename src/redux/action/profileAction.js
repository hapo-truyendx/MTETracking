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

export function getTransactionRequest() {
  return {
    type: types.TRANSACTION_REQUEST,
  }
}

export function getTransactionSuccess(data) {
  return {
    type: types.TRANSACTION_SECCESS,
    data,
  }
}

export function getRunHistoryRequest() {
  return {
    type: types.RUN_HISTORY_REQUEST,
  }
}

export function getRunHistorySuccess(data) {
  return {
    type: types.RUN_HISTORY_SUCCESS,
    data,
  }
}