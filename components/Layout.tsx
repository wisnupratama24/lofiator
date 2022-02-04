import React from "react";
import { LayoutProps } from "~/lib/types";

function Layout({ children }: LayoutProps) {
  return <main className='px-8 py-4'>{children}</main>;
}

export default Layout;
