import styles from "../styles/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import '../styles/App.scss';


function Navbar () {
  const [nav, open] = useState();

  function goTo (id) {
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.mobileBars} onClick={() => open(true)}>
        <FaBars />
      </div>

      <ul
        className={`${nav ? styles.menuMobileActive : undefined} ${
          styles.menu
        }`}
      >
        <li className={styles.mobileFaTimes} onClick={() => open(false)}>
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
        <li className="link" onClick={() => goTo("")}>
        <span className="fa-stack fa-2x has-badge" data-count="5">
            <i className="fa fa-stack-2x fa-inverse"></i>
            <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
        </span>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
