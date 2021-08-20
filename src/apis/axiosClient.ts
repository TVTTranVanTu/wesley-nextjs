import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'https://6115042caec65d0017e9dc68.mockapi.io/api/home',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response;
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
