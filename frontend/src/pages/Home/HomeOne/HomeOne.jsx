import { useNavigate } from "react-router";
import styles from "../Home.module.css";
import ButtonHome from "../../../components/UI/Home/ButtonHome/ButtonHome";
import arrow from "../../../assets/Arrow 1.svg";
import plant from "../../../assets/plantForm.svg";

const HomeOne = () => {
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/products/`);
  };

  return (
    <>
      <section className={styles.homeOneContainer}>
        <div className={styles.teste}>
          <h1 className={styles.h1}>
            Discover your green <span id={styles.colorGreen}>side</span>
          </h1>

          <p id={styles.bio}>
            We are your one-stop destination for all things green and growing.
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis.
          </p>

          <ButtonHome onClick={handleProductDetails} id={styles.btn}>
            Shop now
          </ButtonHome>

          <p id={styles.learn}>
            Learn Gardening <img src={arrow} />
          </p>
        </div>

        <figure>
          <img src={plant} id={styles.img} />
        </figure>
      </section>
    </>
  );
};

export default HomeOne;
