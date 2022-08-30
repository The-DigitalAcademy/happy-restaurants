import styles from "../styles/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const Home = useState(null);
  const OurSpecial = useState(null);
  const AboutUs = useState(null);
  const Menu = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const scrollToSection = (elementState) => {
    window.scrollTo({
      top: elementState.current.offsetTop,
      behavior: 'smooth'
    })
  }
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
        <li className="link">Home</li>
        <li className="link">Our Special</li>
        <li className="link">About Us</li>
        <li className="link">Menu</li>
      </ul>
    </nav>

    
  );
};

export default Navbar;
