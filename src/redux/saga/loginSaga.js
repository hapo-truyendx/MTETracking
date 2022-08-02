import { validateLogin } from '../../service/loginUser';
import { status } from '../../ultis/const';
import { call, put, delay } from 'redux-saga/effects';
import { loginSuccess } from '../action/loginAction';

export function* loginUser(action) {
    const signature = yield call(validateLogin, action.data)
    if(signature.status === status.success) {
        yield put(loginSuccess(signature.message))
    }
}