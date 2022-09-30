import React from "react";
// import styles from "../styles/SpecialDishes.module.scss";
import styles from '../styles/ProductFood.css'
import '../App.css';

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
    <>
    <div className={styles.container} id="menu">
      <div className={styles.title}>
        <h1>Special</h1>
        <h2>Menu</h2>
      </div>
      <div className="cards">
        <h2 className="header">Hey, are you still hungry?</h2>
        <div className="services">
          <div className="content content-1">
            <div className="img-product">
                <img src="https://previews.123rf.com/images/radub85/radub851407/radub85140700226/30323690-healthy-english-breakfast-with-fried-egg-toast-bacon-and-tomatoes.jpg" alt="" />
            </div>
            <h2>Breakfast</h2>
            <p>
            2 Egg, 3 Bacon and Tomato
            </p>
            <h1>R45</h1>
            <a href="#">Buy now</a>
          </div>
          <div className="content content-1">
          <div className="img-product">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png" alt="" />
            </div>
            <h2>Pizza</h2>
            <p>
            Focaccia mozzarella
            </p>
            <h1>R95</h1>
            <a href="#">Buy now</a>
          </div>
          <div className="content content-1">
          <div className="img-product">
                <img src="https://www.carveyourcraving.com/wp-content/uploads/2021/12/vegetarian-spinach-lasagna.jpg" alt="" />
            </div>
            <h2>Pasta</h2>
            <p>
            Lasagna
            </p>
            <h1>R99</h1>
            <a href="#">Buy now</a>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="services">
          <div className="content content-1">
          <div className="img-product">
                <img src="https://eatlittlebird.com/wp-content/uploads/2012/09/classic-meat-pies-2.jpg" alt="" />
            </div>
            <h2>Pie</h2>
            <p>
            Pie steak pepper
            </p>
            <h1>R30</h1>
            <a href="#">Buy now</a>
          </div>
          <div className="content content-1">
          <div className="img-product">
                <img src="https://cdn.loveandlemons.com/wp-content/uploads/2019/07/salad.jpg" alt="" />
            </div>
            <h2>Salads</h2>
            <p>
            Greek salads
            </p>
            <h1>R60</h1>
            <a href="#">Buy now</a>
          </div>
          <div className="content content-1">
          <div className="img-product">
                <img src="https://wholefoodsoulfoodkitchen.com/wp-content/uploads/2022/04/chocolate-milkshake-no-ice-cream-2.jpg" alt="" />
            </div>
            <h2>Cold phluids</h2>
            <p>
            Milk shake choc
            </p>
            <h1>R25</h1>
            <a href="#">Buy now</a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SpecialDishes;
