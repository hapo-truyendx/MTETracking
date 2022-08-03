import * as types from '../action/type'

const initialState = {
    nfts: [],
}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_NFTS_REQUEST: {
            return {
                ...state,
            }
        }
        case types.LIST_NFTS_SUCCESS: {
            return {
                ...state,
                nfts: action.data
            }
        }
        default:
            return state;
    }
}

export default marketReducer;