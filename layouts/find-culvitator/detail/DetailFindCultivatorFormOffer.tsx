import React from "react";
import { DefaultModal } from "~/components";
import { MODAL_FORM_OFFER } from "../utils/types";

import { useFormik } from "formik";
import * as Yup from "yup";
import DefaultInputTextArea from "~/components/input/DefaultInputTextArea";
import { postOfferService } from "../utils/api";
import { useRouter } from "next/router";
import { toastError, toastSucces } from "~/lib/helpers";
import { closeModal } from "~/components/modal/DefaultModal";

const offerSchema = Yup.object().shape({
  letter: Yup.string()
    .min(20, "Minimum 20 symbols")
    .required("Surat tidak boleh kosong"),
});

const initialValues = {
  letter: "",
};
function DetailFindCultivatorFormOffer({
  setNewData,
}: {
  setNewData: Function;
}) {
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: offerSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      postOfferService(router.query.title as string, values.letter)
        .then(async () => {
          toastSucces("Berhasil mengajukan tawaran anda!");
          setSubmitting(false);
          closeModal(MODAL_FORM_OFFER);
          await setNewData();
        })
        .catch((error) => {
          const errorList = error.response.data.error;
          const errorListArray = [];
          for (const property in errorList) {
            errorListArray.push(errorList[property]);
          }
          toastError(errorListArray[0][0]);
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <form method='POST' onSubmit={formik.handleSubmit}>
        <DefaultModal
          target={MODAL_FORM_OFFER}
          title='Ajukan Tawaran'
          disabled={formik.isSubmitting || !formik.isValid}>
          <DefaultInputTextArea
            label='Surat Singkat'
            id='letter'
            type='text'
            placeholder='Surat / Cover Letter singkat untuk tawaran anda'
            className='text-sm'
            classNameLabel='text-sm'
            showError={formik.touched.letter}
            messageError={formik.errors.letter}
            {...formik.getFieldProps("letter")}
          />
        </DefaultModal>
      </form>
    </>
  );
}

export default DetailFindCultivatorFormOffer;
