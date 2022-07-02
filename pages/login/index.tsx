import React, { useEffect } from "react";
import LoginPage from "~/layouts/login/LoginPage";
import { fetchCultivatorLogin } from "~/layouts/login/utils/api";

function Login({ data }: any) {
  return <LoginPage cultivatorList={data} />;
}

export async function getServerSideProps() {
  const response = await fetchCultivatorLogin();
  return {
    props: { data: response.state ? response.data : [] },
  };
}

export default Login;
