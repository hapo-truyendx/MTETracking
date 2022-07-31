import ApiConfig from '../../config/api-config';
import { apiClient } from './client';

export function getUserInfo() {
    return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.USER_INFO}`)
}

export function getUserTransaction() {
    return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.USER_TRANSACTION}`)
}

export function getUserListNft() {
    return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.USER_LIST_NFT}`)
}

export function getUserDetailNft() {
    return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.USER_DETAIL_NFT}`)
}

export function levelUpNft(id) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.USER_LIST_NFT}/${id}/level-up`)
}

export function attrUpNft(id, attr) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.USER_LIST_NFT}/${id}/attr-up`, {
        attr,
    })
}

export function repairNft(id) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.USER_LIST_NFT}/${id}/repair`)
}

export function startNft(id) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.USER_LIST_NFT}/${id}/start`)
}

export function stopNft(id, dataRun) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.USER_LIST_NFT}/${id}/stop`, dataRun)
}

export function getRunHistory() {
    return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.USER_RUN_HISTORY}`)
}