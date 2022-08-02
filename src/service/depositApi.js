import { apiClient } from './client';
import ApiConfig from '../config/api-config';

export function depositNft(id, wallet) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.DEPOSIT_NFT}`, {
        onchain_id: id,
        txn: wallet
    })
}

export function depositToken(amount, currencry, wallet) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.DEPOSIT_TOKEN}`, {
        amount,
        currencry,
        txn: wallet
    })
}