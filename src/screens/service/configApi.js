import { apiClient } from './client';
import ApiConfig from '../../config/api-config';

export function configApp() {
    return apiClient.get(`${ApiConfig.BASE_URL}${ApiConfig.CONFIG}`)
}