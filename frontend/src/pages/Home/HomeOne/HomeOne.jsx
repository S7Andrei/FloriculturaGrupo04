import { useNavigate } from "react-router";
import styles from "./HomeOne.module.css";
import ButtonHome from "../../../components/UI/Home/ButtonHome/ButtonHome";
import arrow from "../../../assets/HomeOneImg/Arrow 1.svg";
import plant from "../../../assets/HomeOneImg/plantForm.svg";
import plantLeft from "../../../assets/HomeOneImg/leftPlant.png";
import box from "../../../assets/HomeOneImg/Rectangle 31.svg";

const HomeOne = () => {
  const navigate = useNavigate();

  const handleProductDetails = () => {
    navigate(`/products/`);
  };

  const handleSearch = () => {
    window.location.href = `https://www.rhs.org.uk/advice/beginners-guide`;
  };

  return (
    <>
      <section className={styles.homeOneContainer}>
        <div className={styles.homeOneWrapper}>
          <p id={styles.topTitle}>
            <img src={box} id={styles.box} />
            {"  "}Love for Nature
          </p>
          <h1 className={styles.h1}>
            Discover your
            <strong id={styles.colorGreen}>green</strong>
          </h1>
          <h1 className={styles.h1}>side</h1>

          <p id={styles.bio}>
            We are your one-stop destination for all things green and growing.
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis.
          </p>
          <figure id={styles.plantLeft}>
          <img src={plantLeft} />
        </figure>
          <ButtonHome onClick={handleProductDetails} id={styles.btn}>
            Shop now
          </ButtonHome>

          <button id={styles.learn} onClick={handleSearch}>
            Learn Gardening <img src={arrow} id={styles.arrow} />
          </button>
        </div>
        
        <figure id={styles.img}>
          <img src={plant} />
        </figure>
      </section>
    </>
  );
};

export default HomeOne;
