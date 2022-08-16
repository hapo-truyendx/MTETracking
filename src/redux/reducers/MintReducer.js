import * as types from '../action/type';

const initialState = {
  choose: [],
  fee: 0,
  new_nfts: {},
  selectNfts: [],
};

const mintReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MINNT_CHOOSE_REQUEST: {
      return {
        ...state,
      };
    }
    case types.MINNT_CHOOSE_SUCCESS: {
      return {
        ...state,
        choose: action.data,
      };
    }
    case types.MINT_FEE_REQUEST: {
      return {
        ...state,
      };
    }
    case types.MINT_FEE_SUCCESS: {
      return {
        ...state,
        fee: action.data,
      };
    }
    case types.MINT_REQUEST: {
      return {
        ...state,
      };
    }
    case types.MINT_SUCCESS: {
      
      return {
        ...state,
        new_nfts: {...action.data},
      };
    }
    case types.SELECT_ITEM: {
      return {
        ...state,
        selectNfts: action.data
      }
    }

    default:
      return state;
  }
};

export default mintReducer;
