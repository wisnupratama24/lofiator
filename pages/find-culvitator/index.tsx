import React, { Suspense, useState } from "react";
import { LayoutSplashScreen } from "~/lib/authenticate";
import dynamic from "next/dynamic";
const FindCulvitatorPage = dynamic(
  () => import("~/layouts/find-culvitator/FindCulvitatorPage"),
  {
    suspense: true,
  }
);

import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/components/ErrorBoundaries";
import { fetchFeedService } from "~/layouts/find-culvitator/utils/api";
import { IServiceModel } from "~/layouts/profile/utils/types";
import { useFormik } from "formik";

interface IPropsFindCultivator {
  data: IServiceModel[];
}

const initialValues = {
  city: "",
  type: 4,
};

function FindCultivator({ data }: IPropsFindCultivator) {
  const [cultivatorsList, setCultivatorsList] = useState(data);

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      let queryParams = `city=${values.city}&type=${values.type}`;
      const response = await fetchFeedService(queryParams);
      if (response.state) {
        setCultivatorsList(response.data);
      } else {
        setCultivatorsList([]);
      }
      setSubmitting(false);
    },
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LayoutSplashScreen />}>
        <FindCulvitatorPage cultivatorsList={cultivatorsList} formik={formik} />
      </Suspense>
    </ErrorBoundary>
  );
}

export async function getServerSideProps() {
  const response = await fetchFeedService();
  return {
    props: {
      data: response.state ? response.data : [],
    },
  };
}

export default FindCultivator;
