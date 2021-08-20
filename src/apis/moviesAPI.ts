import { IMovie, ListResponse } from '../models';
import axiosClient from './axiosClient';
const moviessApi = {
  getAll(): Promise<ListResponse<IMovie>> {
    const url = '/movies';
    return axiosClient.get(url);
  },
};

export default moviessApi;
