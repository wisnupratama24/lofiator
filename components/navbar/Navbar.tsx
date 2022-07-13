import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LOGIN_PAGE, PROFILE_PAGE, REGISTER_PAGE } from "~/constants/page";
import { clearCookies, getCookieUser } from "~/lib/helpers";
import { Logo } from "..";
import DefaultButton from "../button/DefaultButton";
import { IInitialStatePageInit } from "../pageInit/reducer";
import styles from "./Navbar.module.scss";

const navItems = [
  {
    name: "Temukan Supplier",
    link: "/find-cultivator",
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
  const history = useRouter();

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
        <div className='flex justify-between gap-2 items-center'>
          <Link href={PROFILE_PAGE}>
            <a>{pageInit.name}</a>
          </Link>
          |
          <p
            className='text-sm cursor-pointer'
            onClick={() => {
              clearCookies();
              history.push(LOGIN_PAGE);
            }}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
          </p>
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
