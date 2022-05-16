import { Action } from "@reduxjs/toolkit";

export interface LayoutProps {
  children: React.ReactNode;
  classNames? : string
}

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export interface ITableHead {
  label : string,
  width? : string
}

export const waktuPanenList = [
  {
    value : "sepanjang tahun",
    label : "Sepanjang Tahun",
  },
   {
    value : "januari",
    label : "Januari",
  },
   {
    value : "februari",
    label : "Februari",
  },
  {
    value : "maret",
    label : "Maret",
  },
  {
    value : "april",
    label : "April",
  },
  {
    value : "mei",
    label : "Mei",
  },
  {
    value : "juni",
    label : "Juni",
  },
  {
    value : "juli",
    label : "Juli",
  },
  {
    value : "agustus",
    label : "Agustus",
  },
  {
    value : "september",
    label : "September",
  },
  {
    value : "oktober",
    label : "Oktober",
  },
  {
    value : "november",
    label : "November",
  },
  {
    value : "desember",
    label : "Desember",
  },
]

export const jenisBudidayaList = [
  {
    value : "Mujair",
    label : "Mujair",
  },
   {
    value : "Gurame",
    label : "Gurame",
  },
   {
    value : "Bandeng",
    label : "Bandeng",
  },
  {
    value : "Etong",
    label : "Etong",
  },
  {
    value : "Udang",
    label : "Udang",
  },
  {
    value : "Kepiting",
    label : "Kepiting",
  },
  {
    value : "Rajungan",
    label : "Rajungan",
  },
  {
    value : "Lele",
    label : "Lele",
  },
  {
    value : "Lainnya",
    label : "Lainnya",
  }
]