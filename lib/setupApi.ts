import axios from "axios";
import { getCookieUser } from "./helpers";

export const setupApi = axios.create({
  baseURL: "http://skripshit-be.test",
});



setupApi.interceptors.request.use(
  (request: any) => {
    const accessToken: any = getCookieUser();
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${
        accessToken.accessToken
      }`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
