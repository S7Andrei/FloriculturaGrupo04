import { useNavigate } from "react-router";
import styles from "./HomeOne.module.css";
import ButtonHome from "../../../components/UI/Home/ButtonHome/ButtonHome";
import arrow from "../../../assets/Arrow 1.svg";
import plant from "../../../assets/plantForm.svg";
import plantLeft from '../../../assets/left plant2.png'

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
            Discover your green {" "} <span id={styles.colorGreen}>side</span>
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

          <figure>
            <img src={plantLeft} id={styles.plantLeft} />
          </figure>
        </div>

        <figure id={styles.img}>
          <img src={plant}  />
        </figure>
      </section>
    </>
  );
};

export default HomeOne;
