import React from "react";
import { Layout, Navbar } from "~/components";
import Head from "next/head";
import { authenticateRoute } from "~/lib/authenticate";

function ProfilePage() {
  return <>index</>;
}

export default authenticateRoute(ProfilePage);
