import React from "react";
import { verifyAccessToken } from "~/lib/setupApi";

interface IPropsPrivateRoute {
  children: React.ReactNode;
  response?: any;
}
function PrivateRoute({ children, response }: any) {
  console.log("response", response);
  return <>{children}</>;
}

export async function getServerSideProps() {
  const response = await verifyAccessToken();
  console.log("response", response);
  return {
    props: {
      response: "OKOKOK",
    }, // will be passed to the page component as props
  };
}

export default PrivateRoute;
