import * as types from '../action/type';

const initialState = {
  listSneaker : [],
  detailSneaker: {},
  listSneakerForSell : [],
}

const sneakerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SNEAKER_LIST_REQUEST: {
      return {
        ...state,
      }
    }
    case types.SNEAKER_LIST_SUCCESS: {
      return {
        ...state,
        listSneaker: action.data,
      }
    }
    case types.SNEAKER_LIST_FOR_SELL : {
      return {
        ...state,
        listSneakerForSell: action.data
      }
    }
    case types.SNEAKER_DETAIL_REQUEST: {
      return {
        ...state,
      }
    }
    case types.SNEAKER_DETAIL_SUCCESS: {
      return {
        ...state,
        detailSneaker: {...action.data},
      }
    }
    default:
      return state
  }
}
export default sneakerReducer;