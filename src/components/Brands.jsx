import React from "react";
import styles from "../styles/Brands.module.scss";
import { ReactComponent as Logo4 } from "../assets/logos/logo4.svg";

const Brands = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
            <Logo4 />
        </div>
      </div>
    </div>
  );
};

export default Brands;
