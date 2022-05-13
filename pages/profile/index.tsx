import React, { Suspense } from "react";
import { LayoutSplashScreen } from "~/lib/authenticate";

import dynamic from "next/dynamic";
const ProfilePage = dynamic(() => import("~/layouts/profile/ProfilePage"), {
  suspense: true,
});

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback() {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
    </div>
  );
}

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
