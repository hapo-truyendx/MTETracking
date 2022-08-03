import * as types from './type';

export function getNftsRequest() {
    return {
        type: types.LIST_NFTS_REQUEST,
    };
}

export function getNftsSuccess(data) {
    console.log(data, 'nfts');
    return {
        type: types.LIST_NFTS_SUCCESS,
        data,
    };
}