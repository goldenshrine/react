import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>Header</h1>
      <button className={styles.btn}>login</button>
    </div>
  );
};

export default Header;
