import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import restaurant from "../assets/restaurant food.avif";

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.nav}>
        <Navbar />
      </div>

      <div className={styles.bg1}>
        <div className={styles.photo1}>
          <div className="styles.photoContainer">
            <img src={restaurant} alt="restaurant food" />
          </div>
        </div>
      </div>

      <div className={styles.slogan}>
        <h1>{`Welcome To Happy's In Restaurants`}</h1>
      </div>
    </div>
  );
};

export default Home;
