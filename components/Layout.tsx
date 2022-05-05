import React from "react";
import { LayoutProps } from "~/lib/types";
import Footer from "./footer/Footer";

function Layout({ children, classNames }: LayoutProps) {
  return (
    <>
      <main
        className={`lg:px-28 md:px-20 px-8 max-w-screen-xl mx-auto overflow-x-hidden min-h-screen ${classNames}`}>
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;
