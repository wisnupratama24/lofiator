import Link from "next/link";
import React from "react";
import { HOME_PAGE } from "~/constants/page";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link href={HOME_PAGE}>
      <div className={styles.logo}>
        Lofia<span className={styles.subtitle}>tors</span>
      </div>
    </Link>
  );
}

export default Logo;
