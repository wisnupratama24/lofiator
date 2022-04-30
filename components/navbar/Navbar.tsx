import Link from "next/link";
import React from "react";
import { Logo } from "..";
import DefaultButton from "../button/DefaultButton";
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
  return (
    <section>
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
          <Link href='/register'>
            <DefaultButton label='Daftar Sekarang' />
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
