import * as types from '../action/type'
const initialState = {
    messageLogin: '',
    wallet: '',
    token: ''
}

const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST: {
            return {
                ...state,
                wallet: action.data
            }
        }
        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                messageLogin: action.data,
            }
        }
        case types.AUTH_REQUEST: {
            return {
                ...state,
            }
        }
        case types.AUTH_SUCCESS: {
            return {
                ...state,
                token: action.data
            }
        }
        default:
            return state
    }
}
export default reducerLogin;