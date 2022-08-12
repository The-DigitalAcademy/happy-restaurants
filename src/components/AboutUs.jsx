import styles from "../styles/AboutUs.module.scss";
import bg1 from "../assets/bg1.jpg";
import restaurant from "../assets/restaurant.jpg";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg1}>
        <img src={bg1} alt="bg1" />
      </div>
      <div className={styles.restaurant}>
        <img src={restaurant} alt="restaurant" />
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <h3>I am in the business of making people happy.</h3>
          <p>

Whether that comes as a delicious meal, it’s 2022, good times.  
 <h1>I’m Happy Legoale</h1> and Eat, Drink, and Write Copy is how I help busy hospitality visitors and increased sales in a super competitive market.
You bring the celebration. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;