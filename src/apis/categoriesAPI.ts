import { ICategory, ListResponse } from '../models';
import axiosClient from './axiosClient';

const categoriesAPI = {
  getAll(): Promise<ListResponse<ICategory>> {
    const url = '/categories';
    return axiosClient.get(url);
  },
};

export default categoriesAPI;
