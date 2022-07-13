import Cookies from "js-cookie";

import moment from "moment";
import { toast } from "react-toastify";

export function isEmpty(str: any) {
  if (str === "" || str === null || str === undefined || str === "undefined") {
    return true;
  } else {
    return false;
  }
}

export const getCookieUser = () => {
  if (!isEmpty(Cookies.get("user"))) {
    return JSON.parse(Cookies.get("user"));
  } else {
    return false;
  }
};

export const clearCookies = () => {
  Cookies.remove("user");
};

export const defaultDateDisplay = (date: string, withTime = true) => {
  const format = withTime ? "DD/MM/YYYY HH:mm" : "DD/MM/YYYY";
  return moment(date).utc().local().format(format);
};

export const differentDayWithNow = (date: string) => {
  const start = moment(new Date(), "YYYY-MM-DD").local();
  const end = moment(date, "YYYY-MM-DD").local();

  const years = start.diff(end, "year");
  end.add(years, "years");

  const months = start.diff(end, "months");
  end.add(months, "months");

  const days = start.diff(end, "days");

  return `${years === 0 ? "" : years + " tahun"} ${
    months === 0 ? "" : months + " bulan"
  } ${days === 0 ? "1 hari" : days + " hari"} yg lalu`;
};

export const toastSucces = (msg: string) => {
  return toast.success(msg, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const scrollToTop = () => {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const toastError = (msg: string) => {
  return toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export function formatNumber(number: string | number) {
  if (isEmpty(number)) {
    return "0";
  } else {
    const thousand = new Intl.NumberFormat();
    return thousand.format(
      // @ts-ignore
      typeof number === "number" ? number.toFixed(2) : number
    );
  }
}

export function toDayIndo(day: string) {
  let hari;
  const day2 = day.toLowerCase();
  switch (day2) {
    case "monday":
      hari = "Senin";
      break;
    case "tuesday":
      hari = "Selasa";
      break;
    case "wednesday":
      hari = "Rabu";
      break;
    case "thursday":
      hari = "Kamis";
      break;
    case "friday":
      hari = "Jumat";
      break;
    case "saturday":
      hari = "Sabtu";
      break;
    case "sunday":
      hari = "Minggu";
      break;
    default:
      hari = "wrong day";
      break;
  }

  return hari;
}
