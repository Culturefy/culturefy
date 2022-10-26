import { AxiosResponse } from 'axios'
import requests from '../Services/http.service';

const ProfileServices = {
  update(body:any): Promise<AxiosResponse<any, any>> {
    return requests.put(`/me`,body);
  }
};

export default ProfileServices;
