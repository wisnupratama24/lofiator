import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { PROFILE_PAGE, REGISTER_PAGE } from "~/constants/page";
import { RootState } from "~/redux/RootReducers";
import { Logo } from "..";
import DefaultButton from "../button/DefaultButton";
import { IInitialStatePageInit } from "../pageInit/reducer";
import styles from "./Navbar.module.scss";

const navItems = [
  {
    name: "Temukan Supplier",
    link: "/find-culvitator",
  },
  {
    name: "Temukan Produsen",
    link: "/find-producer",
  },
  {
    name: "Hubungi Kami",
    link: "/contact-us",
  },
];

function Navbar() {
  const pageInit = useSelector<RootState>(
    ({ pageInit }) => pageInit
  ) as IInitialStatePageInit;

  return (
    <section>
      <div className='lg:px-28 md:px-20 px-8 max-w-screen-xl mx-auto fixed left-0 right-0 top-0 py-4 bg-white z-10'>
        <header className={styles.navbar}>
          <Logo />

          <ul className='hidden lg:grid'>
            {navItems.map((row, index) => {
              return (
                <li key={index}>
                  <Link href={row.link}>{row.name}</Link>
                </li>
              );
            })}
          </ul>

          <div>
            {pageInit.isAuthorized ? (
              <Link href={PROFILE_PAGE}>{pageInit.name}</Link>
            ) : (
              <DefaultButton
                label='Daftar Sekarang'
                isLink={true}
                href={REGISTER_PAGE}
              />
            )}
          </div>
        </header>
      </div>
    </section>
  );
}

export default Navbar;
