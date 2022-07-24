import Link from "next/link";
import React from "react";
import styles from "../styles/Nav.module.css";

interface Props {}

const Nav = (): JSX.Element => {
  return (
    <ul className={styles.container}>
      <li className={styles.apart}>
        <Link href="/">
          <a className={styles.link}>About</a>
        </Link>
      </li>
      <li className={styles.apart}>
        <Link href="/work">
          <a className={styles.link}>Education</a>
        </Link>
      </li>
      <li className={styles.apart}>
        <Link href="/projects">
          <a className={styles.link}>Projects</a>
        </Link>
      </li>
      <li className={styles.apart}>
        <Link href="/resume">
          <a className={styles.link}>
            Download Resume- make this a button not nav link
          </a>
        </Link>
      </li>
      {/* <li className={styles.apart}>
        <Link href="/random">
          <a className={styles.link}>Random</a>
        </Link>
      </li> */}
    </ul>
  );
};

export default Nav;
