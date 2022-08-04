
import { put, call } from "redux-saga/effects";
import { getUserInfo , getRunHistory, getUserTransaction} from "../../service/profile_nft";
import { status } from "../../ultis/const";
import { getProfileSuccess, getRunHistorySuccess, getTransactionSuccess } from "../action/profileAction";

export function* onGetUserInfo() {
  const response = yield call(getUserInfo)
  if(response.status === status.success) {
    yield put(getProfileSuccess(response.user));
  }
}

export function* onGetRunHistory() {
  const response = yield call(getRunHistory);
  if(response.status === status.success) {
    yield put(getRunHistorySuccess(response.runs));
  }
}

export function* onGetTransaction() {
  const response = yield call(getUserTransaction);
  if(response.status === status.success) {
    yield put(getTransactionSuccess(response.transactions));
  }
}