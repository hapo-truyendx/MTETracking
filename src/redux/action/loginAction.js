import * as types from './type';

export function loginRequest(data) {
    return {
        type: types.LOGIN_REQUEST,
        data,
    };
}
export function loginSuccess(data) {
    return {
        type: types.LOGIN_SUCCESS,
        data,
    }
}