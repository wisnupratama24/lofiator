import React, { useState } from "react";
import { Alert, DefaultModal } from "~/components";
import DefaultInputText from "~/components/input/DefaultInputText";
import DefaultInputTextArea from "~/components/input/DefaultInputTextArea";

import { useFormik } from "formik";
import * as Yup from "yup";
import { IUserModel } from "./utils/types";
import { updateUser } from "./utils/api";
import { closeModal } from "~/components/modal/DefaultModal";

const updateProfileUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Name is required"),
  city: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Asal is required"),
  no_hp: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("No HP is required"),
  description: Yup.string()
    .min(20, "Minimum 20 symbols")
    .required("Deskripsi is required"),
});

interface IPropsFormUpdateProfile {
  user: IUserModel;
  fetchUser: Function;
}

function FormUpdateProfile({ user, fetchUser }: IPropsFormUpdateProfile) {
  const [image, setImage] = useState<any>(null);
  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      no_hp: user.no_hp,
      city: user.city,
      description: user.description,
    },
    enableReinitialize: true,
    validationSchema: updateProfileUserSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("no_hp", values.no_hp);
      formData.append("city", values.city);
      formData.append("description", values.description);
      formData.append("image", image);

      updateUser(formData)
        .then(() => {
          fetchUser();
          closeModal("modal-update-profile");
        })
        .catch((error) => {
          setStatus({
            state: "danger",
            message: "Error",
          });
        });

      setSubmitting(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} method='POST'>
      <DefaultModal target='modal-update-profile' title='Update User'>
        <Alert
          show={formik.status === undefined ? false : true}
          message={formik.status?.message}
          type={formik.status?.state ? "success" : "danger"}
        />
        <div className='mt-2'>
          <div className='grid grid-cols-2 gap-2'>
            <DefaultInputText
              className='text-sm'
              classNameLabel='text-sm'
              label='Nama Lengkap'
              id='name'
              type='text'
              placeholder='Nama Lengkap'
              showError={formik.touched.name}
              messageError={formik.errors.name}
              {...formik.getFieldProps("name")}
            />

            <DefaultInputText
              className='text-sm'
              classNameLabel='text-sm'
              label='Email'
              id='email'
              type='email'
              disabled={true}
              readOnly={true}
              placeholder='User@mail.com'
              showError={formik.touched.email}
              messageError={formik.errors.email}
              {...formik.getFieldProps("email")}
            />
          </div>

          <div className='grid grid-cols-2 gap-2'>
            <DefaultInputText
              className='text-sm'
              classNameLabel='text-sm'
              label='No Handphone / No Whatsapp'
              id='no_hp'
              type='text'
              placeholder='081xxx'
              showError={formik.touched.no_hp}
              messageError={formik.errors.no_hp}
              {...formik.getFieldProps("no_hp")}
            />

            <DefaultInputText
              className='text-sm'
              classNameLabel='text-sm'
              label='Asal'
              id='asal'
              type='text'
              placeholder='Brebes'
              showError={formik.touched.city}
              messageError={formik.errors.city}
              {...formik.getFieldProps("city")}
            />
          </div>

          <DefaultInputText
            className='text-sm'
            classNameLabel='text-sm'
            label='Gambar'
            id='image'
            type='file'
            placeholder=''
            onChange={(e: any) => setImage(e.target.files[0])}
          />

          <DefaultInputTextArea
            label='Deskripsi Singkat'
            id='description'
            type='text'
            placeholder='Deskripsi usaha yang ingin anda tawarkan'
            className='text-sm'
            classNameLabel='text-sm'
            showError={formik.touched.description}
            messageError={formik.errors.description}
            {...formik.getFieldProps("description")}
          />
        </div>
      </DefaultModal>
    </form>
  );
}

export default FormUpdateProfile;
