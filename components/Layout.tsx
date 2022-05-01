import React from "react";
import { LayoutProps } from "~/lib/types";

function Layout({ children, ...props }: LayoutProps) {
  return (
    <main
      className='lg:px-28 md:px-20 px-8 max-w-screen-xl mx-auto overflow-x-hidden'
      {...props}>
      {children}
    </main>
  );
}

export default Layout;
