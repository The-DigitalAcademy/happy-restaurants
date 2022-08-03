import React from 'react'
import styles from '../styles/Specialitties.module.scss'
import { ReactComponent as Western } from '../assets/food/western.svg'
import { ReactComponent as Eastern } from '../assets/food/eastern.svg'
import { ReactComponent as Japan } from '../assets/food/japan.svg'
import { ReactComponent as Korean } from '../assets/food/korean.svg'

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
            <h2>Our Special Cuisine</h2>
        </div>
        <div className={styles.card}>
      <div className='styles.row1'>
          <FoodCard
            foodIcon={<Western />}
            ctg="Western"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt! Soluta facere est nemo ab modi dignissimos sapiente. At, amet? Quasi, iste? Omnis inventore, nemo perferendis repudiandae excepturi tempore quis!"
          />
          <FoodCard
            foodIcon={<Eastern />}
            ctg="Eastern"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt! Soluta facere est nemo ab modi dignissimos sapiente. At, amet? Quasi, iste? Omnis inventore, nemo perferendis repudiandae excepturi tempore quis!"
          />
      </div>

      <div className='styles.row2'>
          <FoodCard
            foodIcon={<Japan />}
            ctg="Japan"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt! Soluta facere est nemo ab modi dignissimos sapiente. At, amet? Quasi, iste? Omnis inventore, nemo perferendis repudiandae excepturi tempore quis!"
          />
          <FoodCard
            foodIcon={<Korean />}
            ctg="Korean"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt! Soluta facere est nemo ab modi dignissimos sapiente. At, amet? Quasi, iste? Omnis inventore, nemo perferendis repudiandae excepturi tempore quis!"
          />
      </div>
      </div>
    </div>
  )
}

export default Specialitties
