import { setupApi } from "~/lib/setupApi";


interface IPropsUserRegister {
    email : string,
    password : string
    password_confirmation : string
    name : string
}

export const userRegister = ({email, password, password_confirmation, name}: IPropsUserRegister) => {
    return  setupApi.post("/login/register", {
        email: email,
        password: password,
        name: name,
        password_confirmation: password_confirmation,
    });
}