
import { apiClient } from './client';
import ApiConfig from '../config/api-config';

export function mintNft(nft_id_1, nft_id_2){
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.MINT}`, {
        nft_id_1: nft_id_1,
        nft_id_2: nft_id_2,
    })
}

export function mintFeeNft(nft_id_1, nft_id_2) {
    return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.MINT_FEE}`, {
        nft_id_1: nft_id_1,
        nft_id_2: nft_id_2,
    })
}

export function mintChooseNft() {
    return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.MINT_CHOOSE}`)
}
