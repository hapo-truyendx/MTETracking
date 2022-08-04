
import { put, call } from "redux-saga/effects";
import { getUserInfo } from "../../service/profile_nft";
import { status } from "../../ultis/const";
import { getProfileSuccess } from "../action/profileAction";

export function* onGetUserInfo() {
  console.log('vo day');
  const response = yield call(getUserInfo)
  console.log(response, 'response');
  if(response.status === status.success) {
    yield getProfileSuccess(response.user)
  }
}