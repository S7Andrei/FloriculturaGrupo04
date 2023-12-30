import styles from "./CarePlants.module.css";
import watering from "../../../assets/watering.svg";
import sunligth from "../../../assets/sunligth.svg";
import nutrientsAndFertilizing from "../../../assets/nutrientsAndFertilizing.svg";
import ButtonHome from "../../../components/UI/Home/ButtonHome/ButtonHome";

import carePlantsImg1 from "../../../assets/careYourPlantsFoto1.png";
import carePlantsImg2 from "../../../assets/careYourPlantsFoto2.png";
import carePlantsImg3 from "../../../assets/careYourPlantsFoto3.png";

function CarePlants() {
  return (
    <section className={styles.carePlantsContainer}>
      <div>
        <h2 className={styles.carePlantsTitle}>
          Stepes To Take Care Of Your <strong>Plants</strong>
        </h2>
        <p className={styles.carePlantsSubtitle}>
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
      </div>

      <div className={styles.containerGrid}>
        <ul className={styles.containerList}>
          <li>
            <img src={watering} alt="" />
          </li>
          <li>
            <h3 className={styles.listItemTitle}>Watering</h3>
          </li>
          <li>
            <p
              className={`${styles.carePlantsParagraph} ${styles.listItemParagraph}`}
            >
              water your plants when the top inch of soil feels dry to the
              touch. Avoid overwatering, as it can lead to root dehydration.
            </p>
          </li>
        </ul>
        <ul className={styles.containerList}>
          <li>
            <img src={sunligth} alt="" />
          </li>
          <li>
            <h3 className={styles.listItemTitle}>Sunlight</h3>
          </li>
          <li>
            <p
              className={`${styles.carePlantsParagraph} ${styles.listItemParagraph}`}
            >
              Most plants need adequate sunlight to thrive. Place your plants in
              areas that receive the appropriate amount of light for their
              specific needs
            </p>
          </li>
        </ul>
        <ul className={styles.containerList}>
          <li>
            <img src={nutrientsAndFertilizing} alt="" />
          </li>
          <li>
            <h3 className={styles.listItemTitle}>Nutrients and Fertilizing</h3>
          </li>
          <li>
            <p
              className={`${styles.carePlantsParagraph} ${styles.listItemParagraph}`}
            >
              Choose a suitable fertilizer based on the specific needs of your
              plants, whether it's a balanced or specialized formula.
            </p>
          </li>
        </ul>
        <figure>
          <img src={carePlantsImg1} alt="" />
        </figure>
        <figure>
          <img src={carePlantsImg2} alt="" />
        </figure>
        <div className={styles.containerImgsDetails}>
          <figure>
            <img src={carePlantsImg3} alt="" />
          </figure>
          <p className={styles.carePlantsParagraph}>
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis. In addition to our extensive plant selection,
            we also provide gardening kits and fertilizers to equip you with
            everything you need to nurture your plants and achieve gardening
            success. But we don't stop there! We believe that knowledge is the
            key to a thriving garden, so we offer a wealth of information and
            resources on gardening techniques, plant care tips, and landscaping
            ideas. Whether you're a seasoned gardener or just starting your
            green journey, our goal is to inspire and support you every step of
            the way. Get ready to explore our virtual garden and discover the
            joys of gardening with us!
          </p>
          <ButtonHome>See more photos</ButtonHome>
        </div>
      </div>
    </section>
  );
}

export default CarePlants;
