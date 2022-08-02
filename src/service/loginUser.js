
import ApiConfig from '../config/api-config';
import { apiClient } from './client';


export function validateLogin(wallet) {
  return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.LOGIN}`, {
    wallet: wallet,
  });
}
export function authLogin(wallet, signature) {
    return apiClient.post(`${ApiConfig.BASE_URL}${ApiConfig.AUTH}`,{
        // wallet: wallet,
        wallet: wallet,
        signature: signature,
    })
}
