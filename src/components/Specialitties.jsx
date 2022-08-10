import React from 'react'
import styles from '../styles/Specialitties.module.scss'
import { ReactComponent as Western } from '../assets/food/western.svg'
import { ReactComponent as Eastern } from '../assets/food/eastern.svg'


const FoodCard=({foodIcon , ctg , description}) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.iconContainer}>
                {foodIcon}
            </div>
            <h2>{ctg}</h2>
            <p>{description}</p>
        </div>
    )
}

const Specialitties = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Specialitties</h1>
            <h2>Our Special</h2>
        </div>
        <div className={styles.card}>
      <div className='styles.row1'>
          <FoodCard
            foodIcon={<Western />}
            ctg="Western Food"
            description="Fried Rice, served with prawn sambal, fried chicken and egg together."
          />
          <FoodCard
            foodIcon={<Eastern />}
            ctg="Eastern Food"
            description="Chicken, salad with fried rice"
          />
      </div>


      </div>
    </div>
  )
}

export default Specialitties
