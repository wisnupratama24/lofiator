import { setupApi } from "~/lib/setupApi";

export const userLogin = (email: string, password : string) => {
    return  setupApi.post("/login/user", {
        email: email,
        password: password,
    });
}

export const fetchCultivatorLogin = async () => {
  try {
    const response = await setupApi.get(`/page/login/cultivator`);
    return {
      state: true,
      data: response.data.data,
    };
  } catch (error) {
    return {
      state: false,
      data: [],
    };
  }
};