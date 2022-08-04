import * as types from './type';

export function getNftsRequest(data) {
    console.log(data);
    return {
        type: types.LIST_NFTS_REQUEST,
        data,
    };
}

export function getNftsSuccess(data) {
    return {
        type: types.LIST_NFTS_SUCCESS,
        data,
    };
}

export function filterMarket(data) {
    return {
        type: types.FILTER_MARKET,
        data,
    }
}

export function onBuyItemNfts(data) {
    return {
        type: types.BUY_NFTS,
        data
    }
}