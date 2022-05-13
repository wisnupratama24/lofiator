import Cookies from "js-cookie";


export function isEmpty(str: any) {
    if(str === "" || str === null || str === undefined || str === "undefined") {
        return true;
    } else {
        return false;
    }
}

export const getCookieUser = () => {
    if(!isEmpty(Cookies.get('user'))) {
        return JSON.parse(Cookies.get('user'))
    } else {
        return false;
    }
}