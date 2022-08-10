import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import eating from '../assets/eating.avif';

const Home = () => {
  return (
    <div className={styles.home}>
    <div className={styles.nav}> 
        <Navbar />
        </div>



        <div className={styles.bg1}>
            <div className={styles.photo1}>
                <div className='styles.photoContainer'>
                  <img src={eating} alt='eating' />
                </div>
            </div>
        </div>

        <div className={styles.slogan}>
            <h1>{`Welcome To Restaurants`}</h1>
        
        </div>
    </div>
  );
};

export default Home