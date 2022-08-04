import axios from 'axios';
// import HttpStatus from 'http-status-codes';

// import {Constants} from '../../config/constants';
import ApiConfig from '../config/api-config';

const request = axios.create({
  baseURL: ApiConfig.BASE_URL,
  timeout: 15000,
  headers: { Authorization: `Bearer ${ApiConfig.DEMO_TOKEN}` }
});

const apiClient = {
  get: (url, data = {}) => {
    console.log('url get: ', data);
    return request({
      method: 'get',
      url: url,
      params: data
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  },
  post: (url, data) => {
    console.log('post ', { url }, { data });
    return request({
      method: 'post',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  },
  patch: (url, data) => {
    console.log('patch ', { url }, { data });
    return request({
      method: 'patch',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        return err;
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
        return err;
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
        return err;
      });
  },
};
export {apiClient};
