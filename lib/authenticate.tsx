import { ComponentType, useEffect, useState } from "react";
import { setupApi } from "./setupApi";

export const redirectTo = (to: string) => {
  return typeof window !== "undefined" ? window.location.replace(to) : "";
};

export const protectedRoute = async () => {
  const verify = await verifyAccessToken();
  if (verify) {
    return true;
  } else {
    return false;
  }
};

export const verifyAccessToken = async () => {
  try {
    await setupApi.get("/login/check-login");
    return true;
  } catch (error) {
    return false;
  }
};

export function authenticateRoute<T>(Component: ComponentType<T>) {
  return (props: any) => {
    const [isAuth, setIsAuth] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
      protectedRoute()
        .then((res) => {
          if (res) {
            setIsAuth(true);
          } else {
            setIsAuth(false);
          }
          setShowLoading(false);
        })
        .catch(() => {
          setIsAuth(false);
          setShowLoading(false);
        });
    }, []);

    const Wrapped = () => {
      if (isAuth) {
        return <Component {...props} />;
      } else {
        redirectTo("login");
        return <></>;
      }
    };

    return showLoading ? <LayoutSplashScreen /> : <Wrapped />;
  };
}

export const LayoutSplashScreen = () => {
  return (
    <div className='flex items-center justify-center mt-28'>
      <h1>Loading....</h1>
    </div>
  );
};
