import * as types from '../action/type'
const initialState = {
    messageLogin: '',
    wallet: '',
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
        default:
            return state
    }
}
export default reducerLogin;