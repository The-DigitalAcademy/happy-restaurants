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
            name="Beef Burger"
            price="32"
            description="Classic greek salad, cheese"
          />

          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, cheese"
          />

          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, cheese"
          />
        </div>
        <div className={styles.co12}>
          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, cheese"
          />

          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, cheese"
          />

          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, cheese"
          />

          <Dishe
            name="Beef Burger"
            price="32"
            description="Classic greek salad, cheese"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
