import React from 'react'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <span className={styles.logo}>Food</span>
                <span className={styles.copyright}>
                <p>&#169; copyright Food. Happy Legoale</p>
                </span>
            </div>
            <ul>
                <li>Privacy Policy</li>
                <li>Teams</li>
                <li className={styles.socialsContainer}>
                    Get in Touch
                    <ul className={styles.socials}></ul>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer