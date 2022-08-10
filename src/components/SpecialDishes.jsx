import React from "react";
import styles from "../styles/SpecialDishes.module.scss";

const Dishe = ({ name, price, description }) => {
  return (
    <div className={styles.disheContainer}>
      <div className={styles.dishe}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

const SpecialDishes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Special</h1>
        <h2>Menu</h2>
      </div>
      <div className={styles.dishe}>
        <div className={styles.co11}>
          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, cheese"
          />

          <Dishe
            name="Chicken"
            price="65"
            description="Pap with salad"
          />

          <Dishe
            name="Steak"
            price="55"
            description="Pap and wors with salad"
          />

          <Dishe
            name="Rib burger"
            price="72"
            description="Tomato, onion, cheese and chips"
          />
        </div>
        <div className={styles.co12}>
          <Dishe
            name="Chicken burger"
            price="50"
            description="Tomato, onion, cheese and chips"
          />

          <Dishe
            name="Pork"
            price="45"
            description="Pap and salad"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
