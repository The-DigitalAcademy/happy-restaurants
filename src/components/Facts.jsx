import React from 'react'
import styles from '../styles/Facts.module.scss'

const Facts = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.facts}>
            <div className={styles.fact}>
                <h2>20</h2>
                <h3>Reataurants</h3>
            </div>
            <div className={styles.fact}>
                <h2>9</h2>
                <h3>Years Expirience</h3>
            </div>
            <div className={styles.fact}>
                <h2>50+</h2>
                <h3>Menu Dishes</h3>
            </div>
            <div className={styles.fact}>
                <h2>250+</h2>
                <h3>Happy Customers</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facts