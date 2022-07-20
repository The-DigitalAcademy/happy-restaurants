import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import { BsArrowRight } from 'react-icons/bs';
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
            <h1>{`Feel The Autenthic & Original Taste From Us`}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident non quisquam itaque repudiandae earum rem facilis? Nobis, aspernatur. Ipsam voluptates quaerat nostrum laborum esse ducimus beatae autem eligendi perferendis?
            </p>
        

        <button className={styles.btn}>
          <span>See More</span>
          <BsArrowRight />
        </button>
        </div>
    </div>
  );
};

export default Home