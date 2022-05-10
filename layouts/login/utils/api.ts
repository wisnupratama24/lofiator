import { setupApi } from "~/lib/setupApi";

export const userLogin = (email: string, password : string) => {
    return  setupApi.post("/login/user", {
        email: email,
        password: password,
    });
}