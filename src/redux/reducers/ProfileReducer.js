import * as types from '../action/type';

const initialState = {
  profile: {},
  runHistory: [],
  transaction: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_REQUEST: {
      return {
        ...state,
      };
    }

    case types.PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action.data,
      };
    }
    case types.RUN_HISTORY_REQUEST: {
      return {
        ...state,
      }
    }
    case types.RUN_HISTORY_SUCCESS: {
      return {
        ...state,
        runHistory: action.data,
      }
    }

    case types.TRANSACTION_REQUEST: {
      return {
        ...state,
      };
    }
    case types.TRANSACTION_SECCESS: {
      return {
        ...state,
        transaction: action.data
      }
    }
    default:
      return state;
  }
};

export default profileReducer;
