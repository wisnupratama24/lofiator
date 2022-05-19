import React from "react";
import DefaultButton from "../button/DefaultButton";
import DefaultInputText from "../input/DefaultInputText";
import styles from "./Filter.module.scss";

const lastUpdate = [
  {
    label: "24 Jam Terakhir",
    value: 1,
  },
  {
    label: "Seminggu Terakhir",
    value: 2,
  },
  {
    label: "24 Jam Terakhir",
    value: 3,
  },
  {
    label: "Kapanpun",
    value: 4,
  },
];
function Filter({
  formik,
  withCategory = true,
}: {
  formik?: any;
  withCategory?: boolean;
}) {
  return (
    <div className={`${styles.Filter} py-2`}>
      <p className='text-center font-medium mt-4'>Filter</p>

      <form method='POST' onSubmit={formik.handleSubmit}>
        <div className=' py-3 px-5'>
          {withCategory && (
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
              {...formik.getFieldProps("type_cultivation")}
            />
          )}

          <DefaultInputText
            placeholder='Contoh Semarang'
            label='Kota'
            id='city'
            {...formik.getFieldProps("city")}
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

          {lastUpdate.map((item, index) => {
            return (
              <RadioButtonLastUpdate
                label={item.label}
                key={index}
                id={`last-update-${index}`}
                value={item.value}
                {...formik.getFieldProps("type")}
              />
            );
          })}

          <DefaultButton
            label={formik.isSubmitting ? "Loading..." : "Terapkan Filter"}
            className='mt-5 block w-full'
            disabled={formik.isSubmitting}
            type='submit'
          />
        </div>
      </form>
    </div>
  );
}

interface IPropsRadioButtonLastUpdate {
  label: string;
  value: number;
  id: string;
}
const RadioButtonLastUpdate = ({
  label,
  value,
  id,
  ...props
}: IPropsRadioButtonLastUpdate) => {
  return (
    <div className='flex gap-3 items-center mb-2'>
      <input type='radio' id={id} value={value} name='last-update' {...props} />
      <label htmlFor={id} className='text-sm text-gray-500'>
        {label}
      </label>
    </div>
  );
};

export default Filter;
