import { authLogin, validateLogin } from '../../service/loginUser';
import { Constants, status } from '../../ultis/const';
import { call, put, delay } from 'redux-saga/effects';
import { authSuccess, loginSuccess } from '../action/loginAction';
import { saveItem } from '../../service/storage';

export function* loginUser(action) {
    const signature = yield call(validateLogin, action.data)
    if(signature.status === status.success) {
        yield put(loginSuccess(signature.message))
    }
}
export function* authUser(action) {
    const auth = yield call(authLogin,action.data.wallet ,action.data.sig);
    if(auth.status === status.success) {
        saveItem(Constants.TOKEN,auth.jwt_token)
        saveItem(Constants.USER_ID, auth.id)
        yield put(authSuccess(auth.jwt_token))
    }
}