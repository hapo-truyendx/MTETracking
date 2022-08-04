import { filterType } from '../../ultis/constFilter'
import * as types from '../action/type'

const initialState = {
    nfts: [],
    filter: {
        type:filterType.typeList[0].id,
        popularity :filterType.popularityList[0].id,
        level :filterType.levelList[0].id,
        mint_count: filterType.mintList[0].id,
        price: filterType.priceList[0].id,
    }
}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_NFTS_REQUEST: {
            return {
                ...state,
                filter: action.data,
            }
        }
        case types.LIST_NFTS_SUCCESS: {
            return {
                ...state,
                nfts: action.data
            }
        }
        case types.FILTER_MARKET: {
            return {
                ...state,
                filter: action.data,
            }
        }
        case types.BUY_NFTS: {
            return {
               ...state, 
            }
        }
        default:
            return state;
    }
}

export default marketReducer;