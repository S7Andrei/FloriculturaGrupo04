import { useNavigate } from "react-router";
import styles from "./Home.module.css";

const HomeOne = () => {
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/products/`);
  };

  return (
    <>
      <section className={styles.homeOneContainer}>
        <h1 className={styles.h1}>
          Discover your green <span id={styles.colorGreen}>side</span>
        </h1>

        <p id={styles.bio}>
          We are your one-stop destination for all things green and growing. Our
          website offers a wide array of stunning plants, ranging from vibrant
          flowers to lush indoor foliage, allowing you to create your very own
          green oasis.
        </p>

        <button id={styles.btn} onClick={handleProductDetails}>
          Shop now
        </button>
      </section>
    </>
  );
};

export default HomeOne;
