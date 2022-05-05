import React from "react";
import DefaultButton from "../button/DefaultButton";
import DefaultInputText from "../input/DefaultInputText";
import styles from "./Filter.module.scss";

function Filter() {
  return (
    <div className={`${styles.Filter} py-2`}>
      <p className='text-center font-medium mt-4'>Filter</p>

      <div className=' py-3 px-5'>
        <DefaultInputText
          placeholder='Contoh Ikan'
          label='Kategori'
          id='category'
          styleLabel={{
            color: "#6C6969",
          }}
          className='text-xs'
          styleInput={{
            borderRadius: "2px",
            padding: "0.6rem 0.7rem",
          }}
        />

        <DefaultInputText
          placeholder='Contoh Semarang'
          label='Kota'
          id='city'
          styleLabel={{
            color: "#6C6969",
          }}
          className='text-xs'
          styleInput={{
            borderRadius: "2px",
            padding: "0.6rem 0.7rem",
          }}
        />

        <h5 className='mt-8 mb-4 text-sm font-medium text-gray-500'>
          Terakhir Diperbaharui
        </h5>

        <RadioButtonLastUpdate label='24 Jam Terakhir' />

        <RadioButtonLastUpdate label='Seminggu Terakhir' />

        <RadioButtonLastUpdate label='Sebulan Terakhir' />

        <RadioButtonLastUpdate label='Kapanpun' />

        <DefaultButton label='Terapkan Filter' className='mt-5 block w-full' />
      </div>
    </div>
  );
}

interface IPropsRadioButtonLastUpdate {
  label: string;
}
const RadioButtonLastUpdate = ({ label }: IPropsRadioButtonLastUpdate) => {
  return (
    <div className='flex gap-3 items-center mb-2'>
      <input type='radio' id='last-update' />
      <label htmlFor='last-update' className='text-sm text-gray-500'>
        {label}
      </label>
    </div>
  );
};

export default Filter;
