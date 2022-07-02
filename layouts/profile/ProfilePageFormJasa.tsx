import React, { useEffect, useState } from "react";
import { Alert, DefaultModal } from "~/components";
import { IInitialValuesJasa, MODAL_FORM_JASA } from "./utils/types";

import { useFormik } from "formik";
import * as Yup from "yup";
import DefaultInputText from "~/components/input/DefaultInputText";
import DefaultInputTextArea from "~/components/input/DefaultInputTextArea";
import { jenisBudidayaList, waktuPanenList } from "~/lib/types";
import { createJasa, deleteImageJasa, updateJasa } from "./utils/api";
import { isEmpty, toastSucces } from "~/lib/helpers";
import { closeModal } from "~/components/modal/DefaultModal";
import { BASE_URL } from "~/lib/setupApi";
import { initialFormJasa } from "./ProfilePage";

const formJasaSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Minimum 5 character")
    .required("Judul tidak boleh kosong"),
  description: Yup.string()
    .min(20, "Minimum 20 character")
    .required("Deskripsi tidak boleh kosong"),
});

interface IProfilePageFormJasa {
  initialValues: IInitialValuesJasa;
  setListJasa: Function;
  setInitialJasa: React.Dispatch<React.SetStateAction<IInitialValuesJasa>>;
}

function ProfilePageFormJasa({
  initialValues,
  setListJasa,
  setInitialJasa,
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

  const [imageDeleteList, setImageDeleteList] = useState<string[]>([]);
  const [imageCount, setImageCount] = useState(1);
  const [imageList, setImageList] = useState<
    {
      value: any;
      index: number;
      src?: string;
      id?: string;
    }[]
  >(() => {
    if (initialValues.image_list.length === 0) {
      return [
        {
          value: "",
          index: 1,
        },
      ];
    } else {
      return initialValues.image_list;
    }
  });

  const formik = useFormik({
    initialValues: {
      title: initialValues.title,
      description: initialValues.description,
    },
    enableReinitialize: true,
    validationSchema: formJasaSchema,
    onSubmit: (values, { setSubmitting, setStatus }) => {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("harvest_time", waktuPanen.toString());
      formData.append("type_cultivation", jenisBudidaya.toString());
      formData.append("image_delete_id", imageDeleteList.toString());

      imageList.map((item, index) => {
        if (!isEmpty(item.value)) {
          formData.append(`image[${index}]`, item.value);
        }
      });

      if (isEmpty(initialValues.id)) {
        createJasa(formData)
          .then(() => {
            toastSucces("Berhasil");
            setStatus({
              state: true,
              message: [],
            });
            setSubmitting(false);
            closeModal(MODAL_FORM_JASA);
            setListJasa();
          })
          .catch((error) => {
            const errorList = error.response.data.error;
            const errorListArray = [];
            for (const property in errorList) {
              errorListArray.push(errorList[property]);
            }
            setStatus({
              state: false,
              message: errorListArray[0][0],
            });
            setSubmitting(false);
          });
      } else {
        updateJasa(formData, initialValues.id.toString())
          .then(() => {
            toastSucces("Berhasil");
            setSubmitting(false);
            closeModal(MODAL_FORM_JASA);
            setListJasa();
            setStatus({
              state: true,
              message: [],
            });
            setInitialJasa(initialFormJasa);
          })
          .catch((error) => {
            const errorList = error.response.data.error;
            const errorListArray = [];
            for (const property in errorList) {
              errorListArray.push(errorList[property]);
            }
            setStatus({
              state: false,
              message: errorListArray[0][0],
            });
            setSubmitting(false);
          });
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
        <div>
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

          <ImageDisplay index={i} />
        </div>
      );
    }

    return <>{images}</>;
  };

  const ImageDisplay = ({ index }: { index: number }) => {
    const checked = imageList.filter((item) => item.index === index);

    if (checked.length > 0 && !isEmpty(checked[0].src)) {
      return (
        <div className='flex gap-2'>
          <img
            src={`${BASE_URL}/${checked[0].src}`}
            alt={`image-${index}`}
            className='max-w-xs'
          />

          <button
            type='button'
            className='text-xs bg-red-500  px-2  gap-1 text-white'
            // @ts-ignore
            onClick={() => handleDeleteImage(checked[0].id)}>
            Delete
          </button>
        </div>
      );
    } else {
      return <></>;
    }
  };

  const handleChangeImage = (value: any, index: number) => {
    const filtered = imageList.filter((item) => item.index === index);
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

  const handleDeleteImage = async (id: string) => {
    const response = await deleteImageJasa(id);
    if (response.state) {
      const filter = imageList.filter(
        (item) => item.id?.toString() !== id.toString()
      );

      setImageList(filter);
      setImageCount(imageCount - 1);
      setImageDeleteList([id, ...imageDeleteList]);
    }
  };

  useEffect(() => {
    setJenisBudidaya(initialValues.jenis_budidaya);
    setWaktuPanen(initialValues.waktu_panen);
    setImageCount(initialValues.image_count);
    setImageList(initialValues.image_list);
    setImageDeleteList([]);
  }, [initialValues.id]);

  return (
    <form method='POST' onSubmit={formik.handleSubmit}>
      <DefaultModal
        target={MODAL_FORM_JASA}
        title='Jasa'
        disabled={formik.isSubmitting || !formik.isValid}>
        <Alert
          show={formik.status === undefined ? false : true}
          message={formik.status?.message}
          type={formik.status?.state ? "success" : "danger"}
        />

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
            className='text-xs bg-yellow-500 rounded-lg flex items-center px-2 py-1 gap-1 mt-2 text-white'
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
