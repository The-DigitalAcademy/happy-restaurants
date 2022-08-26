import styles from "../styles/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className={styles.nav}>

      <div className={styles.mobileBars} onClick={() => setNavOpen(true)}>
        <FaBars />
      </div>

      <ul
        className={`${navOpen ? styles.menuMobileActive : undefined} ${
          styles.menu
        }`}
      >
        <li className={styles.mobileFaTimes} onClick={() => setNavOpen(false)}>
          <FaTimes />
        </li>
        <li>
        <a href="#home" role="button">Home</a>
        </li>
        <li>
          <a href="#our special" role="button">Our Special</a>
        </li>
        <li>
          <a href="#About Us" role="button">About Us</a>
        </li>
        <li>
          <a href="#Menu" role="button">Menu</a>
        </li>
      </ul>
    </nav>

    
  );
};

export default Navbar;
