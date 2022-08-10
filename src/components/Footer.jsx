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
        </nav>
    </footer>
  )
}

export default Footer