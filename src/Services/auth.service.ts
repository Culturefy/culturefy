import { AxiosResponse } from 'axios'
import requests from '../Services/http.service';

const AuthServices = {
  login(body: any): Promise<AxiosResponse<any, any>> {
    return requests.post(`/login`, body);
  },
  signup(body:any): Promise<AxiosResponse<any, any>> {
    return requests.get(`/auth/signup`, body);
  },
  logout(): Promise<AxiosResponse<any, any>> {
    return requests.get(`/auth/logout`);
  }
};

export default AuthServices;
