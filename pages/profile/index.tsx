import React, { Suspense } from "react";
import { LayoutSplashScreen } from "~/lib/authenticate";

import dynamic from "next/dynamic";
const ProfilePage = dynamic(() => import("~/layouts/profile/ProfilePage"), {
  suspense: true,
});

import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "~/components/ErrorBoundaries";

function Profile() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LayoutSplashScreen />}>
        <ProfilePage />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Profile;
