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
export function authRequest(data) {
    return {
        type: types.AUTH_REQUEST,
        data,
    }
}
export function authSuccess(data) {
    return {
        type: types.AUTH_SUCCESS,
        data,
    }
}