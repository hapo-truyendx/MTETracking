import axios from 'axios';
// import HttpStatus from 'http-status-codes';

// import { Constants } from '../../config/constants';
import ApiConfig from '../../config/api-config';

const config = {
  headers: { Authorization: `Bearer ${ApiConfig.DEMO_TOKEN}` }
};

const request = axios.create({
  baseURL: ApiConfig.BASE_URL,
  timeout: 15000,
  config,
});

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
