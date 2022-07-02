import React, { useEffect, useState } from "react";
import { DefaultModal } from "~/components";
import { IInitialValuesPenawaran, MODAL_FORM_PENAWARAN } from "./utils/types";

import { useFormik } from "formik";
import * as Yup from "yup";
import DefaultInputText from "~/components/input/DefaultInputText";
import DefaultInputTextArea from "~/components/input/DefaultInputTextArea";
import { createPenawaran, updatePenawaran } from "./utils/api";
import { isEmpty, toastSucces } from "~/lib/helpers";
import { closeModal } from "~/components/modal/DefaultModal";
import DefaultInputOption from "~/components/input/DefaultInputOption";
import { initialFormPenawaran } from "./ProfilePage";

const formJasaSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Minimum 5 character")
    .required("Judul tidak boleh kosong"),
  min_budget: Yup.string()
    .min(5, "Minimum 5 character")
    .required("minimal budget tidak boleh kosong"),
  max_budget: Yup.string()
    .min(5, "Minimum 5 character")
    .required("maximal budget tidak boleh kosong"),
  publish_date: Yup.string().required("Tgl Publish tidak boleh kosong"),
  publish_limit: Yup.string().required("Tgl Deadline tidak boleh kosong"),
  description: Yup.string()
    .min(20, "Minimum 20 character")
    .required("Deskripsi tidak boleh kosong"),
});

interface IProfilePageFormPenawaran {
  initialValues: IInitialValuesPenawaran;
  setListPenawaran: Function;
  setInitialPenawaran: Function;
}

function ProfilePageFormPenawaran({
  initialValues,
  setListPenawaran,
  setInitialPenawaran,
}: IProfilePageFormPenawaran) {
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
      name: initialValues.name,
      description: initialValues.description,
      min_budget: initialValues.min_budget,
      max_budget: initialValues.max_budget,
      weight: initialValues.weight,
      status: initialValues.status,
      publish_date: initialValues.publish_date,
      publish_limit: initialValues.publish_limit,
    },
    enableReinitialize: true,
    validationSchema: formJasaSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("min_budget", values.min_budget);
      formData.append("max_budget", values.max_budget);
      formData.append("weight", values.weight);
      formData.append("publish_date", values.publish_date);
      formData.append("publish_limit", values.publish_limit);
      formData.append("status", values.status);

      imageList.map((item) => {
        if (!isEmpty(item.value)) {
          formData.append("image[]", item.value);
        }
      });

      if (isEmpty(initialValues.id)) {
        createPenawaran(formData)
          .then(() => {
            toastSucces("Berhasil");
            setInitialPenawaran(initialFormPenawaran);
            setSubmitting(false);
            closeModal(MODAL_FORM_PENAWARAN);
            setListPenawaran();
          })
          .catch((error) => {
            console.log(error);
            setSubmitting(false);
          });
      } else {
        updatePenawaran(formData, initialValues.id.toString())
          .then(() => {
            toastSucces("Berhasil");
            setInitialPenawaran(initialFormPenawaran);
            setSubmitting(false);
            closeModal(MODAL_FORM_PENAWARAN);
            setListPenawaran();
          })
          .catch((error) => {
            console.log(error);
            setSubmitting(false);
          });
      }
    },
  });

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

  return (
    <form method='POST' onSubmit={formik.handleSubmit}>
      <DefaultModal
        target={MODAL_FORM_PENAWARAN}
        title='Penawaran'
        disabled={formik.isSubmitting || !formik.isValid}>
        <div className='mt-2'>
          <DefaultInputText
            className='text-sm'
            classNameLabel='text-sm'
            label='Judul'
            id='name'
            type='text'
            placeholder='Judul'
            showError={formik.touched.name}
            messageError={formik.errors.name}
            {...formik.getFieldProps("name")}
          />

          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-5'>
              <DefaultInputText
                className='text-sm'
                classNameLabel='text-sm'
                label='Min Budget'
                id='min_budget'
                type='text'
                placeholder='Min Budget'
                showError={formik.touched.min_budget}
                messageError={formik.errors.min_budget}
                {...formik.getFieldProps("min_budget")}
              />
            </div>

            <div className='col-span-5'>
              <DefaultInputText
                className='text-sm'
                classNameLabel='text-sm'
                label='Max Budget'
                id='max_budget'
                type='text'
                placeholder='Max Budget'
                showError={formik.touched.max_budget}
                messageError={formik.errors.max_budget}
                {...formik.getFieldProps("max_budget")}
              />
            </div>

            <div className='col-span-2'>
              <DefaultInputOption
                className='text-sm'
                classNameLabel='text-sm'
                label='Berat'
                id='weight'
                type='text'
                placeholder='Weight'
                data={[
                  {
                    value: "Gram",
                    label: "Gram",
                  },
                  {
                    value: "Ons",
                    label: "Ons",
                  },
                  {
                    value: "Kg",
                    label: "Kg",
                  },
                  {
                    value: "Kwintal",
                    label: "Kwintal",
                  },
                  {
                    value: "Ton",
                    label: "Ton",
                  },
                ]}
                showError={formik.touched.weight}
                messageError={formik.errors.weight}
                {...formik.getFieldProps("weight")}
              />
            </div>
          </div>

          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-4'>
              <DefaultInputText
                className='text-sm'
                classNameLabel='text-sm'
                label='Tanggal Publish'
                id='publish_date'
                type='date'
                placeholder='Max Budget'
                showError={formik.touched.publish_date}
                messageError={formik.errors.publish_date}
                {...formik.getFieldProps("publish_date")}
              />
            </div>
            <div className='col-span-4'>
              <DefaultInputText
                className='text-sm'
                classNameLabel='text-sm'
                label='Deadline'
                id='publish_limit'
                type='date'
                placeholder='Max Budget'
                showError={formik.touched.publish_limit}
                messageError={formik.errors.publish_limit}
                {...formik.getFieldProps("publish_limit")}
              />
            </div>
            <div className='col-span-4'>
              <DefaultInputOption
                className='text-sm'
                classNameLabel='text-sm'
                label='Status'
                id='status'
                type='text'
                placeholder='status'
                data={[
                  {
                    value: "draft",
                    label: "Draft",
                  },
                  {
                    value: "publish",
                    label: "Publish",
                  },
                  {
                    value: "close",
                    label: "Close",
                  },
                ]}
                showError={formik.touched.status}
                messageError={formik.errors.status}
                {...formik.getFieldProps("status")}
              />
            </div>
          </div>

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

export default ProfilePageFormPenawaran;
