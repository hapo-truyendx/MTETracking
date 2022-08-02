import { apiClient } from './client';
import ApiConfig from '../config/api-config';

export function withdrawNft(id) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.WITHDRAW_NFT}`, {
        nft_id: id
    })
}

export function configApp(amount, currency) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.WITHDRAW_TOKEN}`, {
        amount: amount,
        currency: currency,
    })
}