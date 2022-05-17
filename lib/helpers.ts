import Cookies from "js-cookie";

import moment from 'moment';
import { toast } from "react-toastify";

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

export const defaultDateDisplay = (date: string, withTime = true) => {
  const format = withTime ? "DD/MM/YYYY HH:mm" : "DD/MM/YYYY";
  return moment(date).utc().local().format(format);
};

export const toastSucces = (msg: string) => {
    return toast.success(msg, {
        position: toast.POSITION.TOP_CENTER,
    });
}

export const toastError = (msg: string) => {
    return toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
    });
}