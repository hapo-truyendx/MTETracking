import axios from 'axios';
import HttpStatus from 'http-status-codes';

import { Constants } from '../../config/constants';
import ApiConfig from '../../config/api-config';

const request = axios.create({
  baseURL: ApiConfig.BASE_URL,
  timeout: 15000,
});

// Add a request interceptor
// request.interceptors.request.use(
//   async config => {
//     const token = await getItem(Constants.ACCESS_TOKEN);
//     if (token) config.headers['Authorization'] = token;
//     return config;
//   },
//   error => {
//     Promise.reject(error)
//   });

// // Add a response interceptor
// request.interceptors.response.use((response) => {
//   return response;
// }, async function (error) {
//   console.log('err_response_interceptor_account', error.response);
//   const originalRequest = error.response.config;
//   // refresh token expired
//   if (error.response.status === HttpStatus.UNAUTHORIZED && originalRequest.url === `${ApiConfig.NEW_ACCESS_TOKEN}`) {
//     NavigationService.navigate('SignIn');
//     return Promise.reject(error);
//   }

//   if (error.response.status === HttpStatus.UNAUTHORIZED && !originalRequest._retry) {
//     originalRequest._retry = true;
//     const refreshToken = await getItem(Constants.REFRESH_TOKEN);
//     const accountId = await getItem(Constants.ACCOUNT_ID);
//     return axios.post(`${ApiConfig.BASE_URL}${ApiConfig.NEW_ACCESS_TOKEN}`,
//       {
//         accountId,
//         refreshToken
//       }).then(res => {
//         if (res.status === HttpStatus.OK) {
//           console.log('originalRequest', originalRequest);
//           saveItem(Constants.ACCESS_TOKEN, res.data.token);
//           request.defaults.headers.common['Authorization'] = res.data.token;
//           return request(originalRequest);
//         }
//       })
//   }
//   // NavigationService.navigate('Login');
//   return Promise.reject(error.response);
// });

const apiClient = {
  get: (url, data) => {
    // console.log('url get: ', url);
    return request({
      method: 'get',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  post: (url, data) => {
    // console.log('post ', {url}, {data});
    return request({
      method: 'post',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  delete: (url, data) => {
    return request({
      method: 'delete',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  put: (url, data) => {
    return request({
      method: 'put',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export { apiClient };
