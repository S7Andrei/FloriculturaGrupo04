import styles from "./CarePlants.module.css";
import watering from "../../../assets/watering.svg";
import sunligth from "../../../assets/sunligth.svg";
import nutrientsAndFertilizing from "../../../assets/nutrientsAndFertilizing.svg";

function CarePlants() {
  return (
    <section>
      <div>
        <h2 className={styles.carePlantcarPlantsSubtitlesTitle}>
          Stepes To Take Care Of Your Plants
        </h2>
        <p className={styles.carPlantsSubtitle}>
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
      </div>

      <div>
        <ul>
          <li>
            <img src={watering} alt="" />
          </li>
          <li>
            <h3>Watering</h3>
          </li>
          <li>
            <p>
              water your plants when the top inch of soil feels dry to the
              touch. Avoid overwatering, as it can lead to root dehydration.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <img src={sunligth} alt="" />
          </li>
          <li>
            <h3>Sunlight</h3>
          </li>
          <li>
            <p>
              Most plants need adequate sunlight to thrive. Place your plants in
              areas that receive the appropriate amount of light for their
              specific needs
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <img src={nutrientsAndFertilizing} alt="" />
          </li>
          <li>
            <h3>Nutrients and Fertilizing</h3>
          </li>
          <li>
            <p>
              Choose a suitable fertilizer based on the specific needs of your
              plants, whether it's a balanced or specialized formula.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CarePlants;
