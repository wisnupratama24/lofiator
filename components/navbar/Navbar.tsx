import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PROFILE_PAGE, REGISTER_PAGE } from "~/constants/page";
import { getCookieUser } from "~/lib/helpers";
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
  // const pageInit = useSelector<RootState>(
  //   ({ pageInit }) => pageInit
  // ) as IInitialStatePageInit;

  const [pageInit, setPageInit] = useState<IInitialStatePageInit>({
    isAuthorized: false,
    name: "",
  });

  useEffect(() => {
    const cookie = getCookieUser();
    if (cookie) {
      setPageInit({
        isAuthorized: true,
        name: cookie.name,
      });
    }
  }, []);

  const ButtonChecked = () => {
    if (pageInit.isAuthorized) {
      return (
        <div>
          <Link href={PROFILE_PAGE}>
            <a>{pageInit.name}</a>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <DefaultButton
            label='Daftar Sekarang'
            isLink={true}
            href={REGISTER_PAGE}
          />
        </div>
      );
    }
  };

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

          <ButtonChecked />
        </header>
      </div>
    </section>
  );
}

export default Navbar;
