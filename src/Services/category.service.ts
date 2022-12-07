import requests from './http.service';
import { AxiosResponse } from 'axios'

const CategoryServices = {
  getAll(): Promise<AxiosResponse> {
    return requests.get('/category');
  },
  getById(user: string): Promise<AxiosResponse> {
    return requests.get(`/category/survey?userId=${user}`);
  },

};

export default CategoryServices;
