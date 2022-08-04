import ApiConfig from '../config/api-config';
import {apiClient} from './client';

export function getListNft(data) {
  console.log('data', data);
  return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.LIST_NFT}`, data);
}

export function getDetailNft(id) {
  return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.LIST_NFT}/${id}`);
}

export function getSellNft(id, price) {
  return apiClient.post(
    `${ApiConfig.BASE_URL}${ApiConfig.LIST_NFT}/${id}/sell`,
    {
      price: price,
    },
  );
}

export function buyNft(id) {
  return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.LIST_NFT}/${id}/buy`);
}

export function getCancelBuyNft(id) {
  return apiClient.post(
    `${ApiConfig.BASE_URL}${ApiConfig.LIST_NFT}/${id}/cancel`,
  );
}
