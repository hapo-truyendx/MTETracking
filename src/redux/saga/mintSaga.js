import { put, call } from "redux-saga/effects";
import { mintChooseNft } from "../../service/mintApi";
import { status } from "../../ultis/const";
import { getMintChooseSuccess } from "../action/mintAction";

export function* onGetChoose() {
  const mintResponse = yield call(mintChooseNft)
  if(mintResponse.status === status.success) {
    yield put(getMintChooseSuccess(mintResponse.nfts))
  }
}
