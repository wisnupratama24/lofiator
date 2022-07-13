import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCookieUser } from "~/lib/helpers";
import { setAuthorized, setNameUser, setUserID } from "./reducer";

function PageInit({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (getCookieUser()) {
      dispatch(setNameUser(getCookieUser().name));
      dispatch(setUserID(getCookieUser().id));
      dispatch(setAuthorized(true));
    } else {
      dispatch(setNameUser(""));
      dispatch(setAuthorized(false));
    }
  }, []);

  return <>{children}</>;
}

export default PageInit;
