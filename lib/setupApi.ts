import axios from "axios";
import { isEmpty } from "./helpers";

export const setupApi = axios.create({
  baseURL: "http://skripshit-be.test",
  
});

setupApi.interceptors.request.use(
  (request: any) => {
    const accessToken: any = localStorage.getItem("user");
    if (!isEmpty(accessToken)) {
      request.headers["Authorization"] = `Bearer ${
        JSON.parse(accessToken).accessToken
      }`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

