import requests from "./http.service";
import { AxiosResponse } from "axios";

const NewCourseFormServices = {
  getAll(): Promise<AxiosResponse> {
    return requests.get("/course");
  },
  getById(id: string): Promise<AxiosResponse> {
    return requests.get(`/course/${id}`);
  },
  add(data: any): Promise<AxiosResponse> {
    return requests.post("/course", data);
  },
  update(data: any): Promise<AxiosResponse> {
    return requests.put(`/course/${data.answer_id}`, { answer: data.answer });
  },
  // Course Videos Actions
  addCourseVideo(body: any): Promise<AxiosResponse> {
    return requests.post('/coursevideo', body);
  },
  getCourseVideos(): Promise<AxiosResponse> {
    return requests.get('/coursevideo');
  },
  updateCourseVideos(id: string, body: any): Promise<AxiosResponse> {
    return requests.put(`/coursevideo/${id}`, body);
  },

};

export default NewCourseFormServices;
