import React, { Suspense, useEffect, useState } from "react";
import { LayoutSplashScreen } from "~/lib/authenticate";
import dynamic from "next/dynamic";

import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/components/ErrorBoundaries";
import { fetchListOffer } from "~/layouts/list-offer/api/api";
import { useRouter } from "next/router";
import { isEmpty } from "~/lib/helpers";

const ListOfferPage = dynamic(() => import("~/layouts/list-offer/ListOffer"), {
  ssr: false,
});

function FindCultivator() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LayoutSplashScreen />}>
        <ListOfferPage />
      </Suspense>
    </ErrorBoundary>
  );
}

export default FindCultivator;
