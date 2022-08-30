import styles from "../styles/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const goTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

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
        <li className="link" onClick={() => goTo("home")}>
          Home
        </li>
        <li className="link" onClick={() => goTo("OurSpecial")}>
          Our Special
        </li>
        <li className="link" onClick={() => goTo("AboutUs")}>
          About Us
        </li>
        <li className="link" onClick={() => goTo("menu")}>
          Menu
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
