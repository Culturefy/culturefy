import { AxiosResponse } from 'axios'
import requests from 'src/Services/http.service';

const AuthServices = {
  login(body: any): Promise<AxiosResponse<any, any>> {
    return requests.post(`/auth/signin`, body);
  },
  signup(): Promise<AxiosResponse<any, any>> {
    return requests.get(`/auth/signup`);
  },
  logout(): Promise<AxiosResponse<any, any>> {
    return requests.get(`/auth/logout`);
  }
};

export default AuthServices;
