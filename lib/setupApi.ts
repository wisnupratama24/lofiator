import axios from "axios";
import { getCookieUser } from "./helpers";
export const BASE_URL = "http://lofiator-be.test";
export const BASE_URL_PUBLIC = "https://8f0e-114-10-24-76.ap.ngrok.io";
export const usePublic = false;
export const setupApi = axios.create({
  baseURL: usePublic ? BASE_URL_PUBLIC : BASE_URL,
});

setupApi.interceptors.request.use(
  (request: any) => {
    const accessToken: any = getCookieUser();
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken.accessToken}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
