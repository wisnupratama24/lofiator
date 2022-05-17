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
    value : "Sepanjang tahun",
    label : "Sepanjang Tahun",
  },
   {
    value : "Januari",
    label : "Januari",
  },
   {
    value : "Februari",
    label : "Februari",
  },
  {
    value : "Maret",
    label : "Maret",
  },
  {
    value : "April",
    label : "April",
  },
  {
    value : "Mei",
    label : "Mei",
  },
  {
    value : "Juni",
    label : "Juni",
  },
  {
    value : "Juli",
    label : "Juli",
  },
  {
    value : "Agustus",
    label : "Agustus",
  },
  {
    value : "September",
    label : "September",
  },
  {
    value : "Oktober",
    label : "Oktober",
  },
  {
    value : "November",
    label : "November",
  },
  {
    value : "Desember",
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