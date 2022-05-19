import React, { Suspense, useState } from "react";
import { LayoutSplashScreen } from "~/lib/authenticate";
import dynamic from "next/dynamic";
const FindProducerPage = dynamic(
  () => import("~/layouts/find-producer/FindProducerPage"),
  {
    suspense: true,
  }
);

import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/components/ErrorBoundaries";
import { IFeedModel } from "~/layouts/profile/utils/types";
import { useFormik } from "formik";
import { fetchFeedProducer } from "~/layouts/find-producer/utils/api";

interface IPropsFindProducer {
  data: IFeedModel[];
}

const initialValues = {
  city: "",
  type: 4,
  type_cultivation: "",
};

function FindProducer({ data }: IPropsFindProducer) {
  const [producerList, setProducerList] = useState(data);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      let queryParams = `city=${values.city}&type=${values.type}&type_cultivation=${values.type_cultivation}`;
      const response = await fetchFeedProducer(queryParams);
      if (response.state) {
        setProducerList(response.data);
      } else {
        setProducerList([]);
      }
      setSubmitting(false);
    },
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LayoutSplashScreen />}>
        <FindProducerPage producerList={producerList} formik={formik} />
      </Suspense>
    </ErrorBoundary>
  );
}

export async function getServerSideProps() {
  const response = await fetchFeedProducer();
  return {
    props: {
      data: response.state ? response.data : [],
    },
  };
}

export default FindProducer;
