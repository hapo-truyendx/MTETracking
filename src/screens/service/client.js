import axios from 'axios';
// import HttpStatus from 'http-status-codes';

// import {Constants} from '../../config/constants';
import ApiConfig from '../../config/api-config';

const request = axios.create({
  baseURL: ApiConfig.BASE_URL,
  timeout: 15000,
  headers: {Authorization: `Bearer ${ApiConfig.DEMO_TOKEN}`},
});

const apiClient = {
  get: (url, baseURL = ApiConfig.BASE_URL) => {
    // console.log('url get: ', url);
    return request({
      method: 'get',
      url: url,
      baseURL,
    })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        throw err;
      });
  },
  post: (url, data, baseURL = ApiConfig.BASE_URL) => {
    console.log('post ', {url}, {data});
    return request({
      method: 'post',
      url: url,
      data: data,
      baseURL,
    })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        throw err;
      });
  },
  delete: (url, data, baseURL = ApiConfig.BASE_URL) => {
    return request({
      method: 'delete',
      url: url,
      data: data,
      baseURL,
    })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        throw err;
      });
  },
  put: (url, data, baseURL = ApiConfig.BASE_URL) => {
    return request({
      method: 'put',
      url: url,
      data: data,
      baseURL,
    })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        throw err;
      });
  },
};

export {apiClient};
