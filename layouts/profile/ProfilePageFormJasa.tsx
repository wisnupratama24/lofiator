import React, { useEffect, useState } from "react";
import { DefaultModal } from "~/components";
import { IInitialValuesJasa, MODAL_FORM_JASA } from "./utils/types";

import { useFormik } from "formik";
import * as Yup from "yup";
import DefaultInputText from "~/components/input/DefaultInputText";
import DefaultInputTextArea from "~/components/input/DefaultInputTextArea";
import { jenisBudidayaList, waktuPanenList } from "~/lib/types";
import { createJasa, updateJasa } from "./utils/api";
import { isEmpty, toastSucces } from "~/lib/helpers";
import { closeModal } from "~/components/modal/DefaultModal";

const formJasaSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Minimum 3 symbols")
    .required("Judul tidak boleh kosong"),
  description: Yup.string()
    .min(20, "Minimum 20 symbols")
    .required("Deskripsi tidak boleh kosong"),
});

interface IProfilePageFormJasa {
  initialValues: IInitialValuesJasa;
  setListJasa: Function;
}

function ProfilePageFormJasa({
  initialValues,
  setListJasa,
}: IProfilePageFormJasa) {
  const [waktuPanen, setWaktuPanen] = useState<string[]>(() => {
    if (initialValues.waktu_panen.length === 0) {
      return [];
    } else {
      return initialValues.waktu_panen;
    }
  });
  const [jenisBudidaya, setJenisBudidaya] = useState<string[]>(() => {
    if (initialValues.jenis_budidaya.length === 0) {
      return [];
    } else {
      return initialValues.jenis_budidaya;
    }
  });

  const [imageCount, setImageCount] = useState(1);
  const [imageList, setImageList] = useState<
    {
      value: any;
      index: number;
    }[]
  >([
    {
      value: "",
      index: 1,
    },
  ]);

  const formik = useFormik({
    initialValues: {
      title: initialValues.title,
      description: initialValues.description,
    },
    enableReinitialize: true,
    validationSchema: formJasaSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("harvest_time", waktuPanen.toString());
      formData.append("type_cultivation", jenisBudidaya.toString());

      imageList.map((item) => {
        if (!isEmpty(item.value)) {
          formData.append("image[]", item.value);
        }
      });

      if (isEmpty(initialValues.id)) {
        createJasa(formData)
          .then(() => {
            toastSucces("Berhasil");
            setSubmitting(false);
            closeModal(MODAL_FORM_JASA);
            setListJasa();
          })
          .catch((error) => console.log(error));
      } else {
        updateJasa(formData, initialValues.id.toString())
          .then(() => {
            toastSucces("Berhasil");
            setSubmitting(false);
            closeModal(MODAL_FORM_JASA);
            setListJasa();
          })
          .catch((error) => console.log(error));
      }
    },
  });

  const handleChangeWaktuPanen = (value: string) => {
    const filterWaktuPanen = waktuPanen.filter((item) => item === value);
    if (filterWaktuPanen.length > 0) {
      const deleteValueWaktuPanen = waktuPanen.filter((item) => item !== value);
      setWaktuPanen(deleteValueWaktuPanen);
    } else {
      setWaktuPanen([value, ...waktuPanen]);
    }
  };

  const handleChangeJenisBudidaya = (value: string) => {
    const filterJenisBudidaya = jenisBudidaya.filter((item) => item === value);
    if (filterJenisBudidaya.length > 0) {
      const deleteValueJenisBudidaya = jenisBudidaya.filter(
        (item) => item !== value
      );
      setJenisBudidaya(deleteValueJenisBudidaya);
    } else {
      setJenisBudidaya([value, ...jenisBudidaya]);
    }
  };

  const ImageLoop = () => {
    const images = [];
    for (let i = 1; i <= imageCount; i++) {
      images.push(
        <div className='grid grid-cols-12 items-center gap-3' key={i}>
          <div className='col-span-11'>
            <DefaultInputText
              className='text-sm image-1'
              classNameLabel='text-sm image-label'
              label='Gambar'
              id={`image-${i}`}
              type='file'
              placeholder=''
              onChange={(e: any) => handleChangeImage(e.target.files[0], i)}
            />
          </div>

          <div className='col-span-1'>
            <button
              type='button'
              className='mt-5'
              onClick={() => handleChangeDeleteImage(i)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      );
    }

    return <>{images}</>;
  };

  const handleChangeImage = (value: any, index: number) => {
    const filtered = imageList.filter((item) => item.index === index);
    // @ts-ignore
    document.querySelector(".image-label").innerHTML = "OK";
    if (filtered.length > 0) {
      const deleteFiltered = imageList.filter((item) => item.index !== index);
      setImageList([
        {
          value,
          index,
        },
        ...deleteFiltered,
      ]);
    } else {
      setImageList([
        {
          value,
          index,
        },
        ...imageList,
      ]);
    }
  };

  const handleChangeDeleteImage = (index: number) => {
    const filtered = imageList.filter((item) => item.index === index);
    if (filtered.length > 0) {
      const deleteFiltered = imageList.filter((item) => item.index !== index);
      setImageList(deleteFiltered);
      setImageCount(imageCount - 1);
    }
  };

  useEffect(() => {
    setJenisBudidaya(initialValues.jenis_budidaya);
    setWaktuPanen(initialValues.waktu_panen);
  }, [initialValues.id]);

  return (
    <form method='POST' onSubmit={formik.handleSubmit}>
      <DefaultModal
        target={MODAL_FORM_JASA}
        title='Jasa'
        disabled={formik.isSubmitting || !formik.isValid}>
        <div className='mt-2'>
          <DefaultInputText
            className='text-sm'
            classNameLabel='text-sm'
            label='Judul'
            id='title'
            type='text'
            placeholder='Judul'
            showError={formik.touched.title}
            messageError={formik.errors.title}
            {...formik.getFieldProps("title")}
          />

          <DefaultInputTextArea
            label='Deskripsi'
            id='description'
            type='text'
            placeholder='Deskripsi jasa yang ingin anda tawarkan'
            className='text-sm'
            classNameLabel='text-sm'
            showError={formik.touched.description}
            messageError={formik.errors.description}
            {...formik.getFieldProps("description")}
          />

          <div className='mb-2'>
            <p className='text-xs text-gray-400 font-medium mb-2'>
              Waktu Panen
            </p>
            <div className='grid grid-cols-5'>
              {waktuPanenList.map((item, index) => {
                const checked = waktuPanen.filter((w) => w === item.value);
                return (
                  <div className='flex gap-2 items-center mb-1'>
                    <input
                      checked={checked.length > 0 ? true : false}
                      type='checkbox'
                      defaultValue={item.value}
                      id={`harvest-time-${index}`}
                      onChange={() => handleChangeWaktuPanen(item.value)}
                    />
                    <label
                      htmlFor={`harvest-time-${index}`}
                      className='text-xs text-gray-500 select-none'>
                      {item.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='mb-2'>
            <p className='text-xs text-gray-400 font-medium mb-2'>
              Jenis Budidaya
            </p>
            <div className='grid grid-cols-5'>
              {jenisBudidayaList.map((item, index) => {
                const checked = jenisBudidaya.filter((w) => w === item.value);
                return (
                  <div className='flex gap-2 items-center mb-1'>
                    <input
                      checked={checked.length > 0 ? true : false}
                      type='checkbox'
                      id={`type-cultivation-${index}`}
                      onChange={() => handleChangeJenisBudidaya(item.value)}
                    />
                    <label
                      htmlFor={`type-cultivation-${index}`}
                      className='text-xs text-gray-500 select-none'>
                      {item.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <ImageLoop />

          <button
            type='button'
            className='text-xs bg-yellow-500 rounded-lg flex items-center px-2 py-1 gap-1 text-white'
            onClick={() => {
              const count = imageCount + 1;
              setImageList([
                {
                  value: "",
                  index: count,
                },
                ...imageList,
              ]);
              setImageCount(count);
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              style={{
                color: "white",
              }}
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4v16m8-8H4'
              />
            </svg>
            Tambah Gambar
          </button>
        </div>
      </DefaultModal>
    </form>
  );
}

export default ProfilePageFormJasa;
