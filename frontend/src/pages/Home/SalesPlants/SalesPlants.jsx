import PlantCard from "../../../components/PlantCard/PlantCard";
import styles from "./styles.module.css";

const SalesPlants = () => {
  return (
    <section>
      <div id={styles.title}>
        <h1 className={styles.h1}>
          this weeks Most Popular{" "}
          <span id={styles.colorGreen}>and best selling</span>
        </h1>
      </div>
      <PlantCard filter={"notPromo"} />

      <div id={styles.title}>
        <h1 className={styles.h1}>
          <span id={styles.colorGreen}>Plants in</span> Sale
        </h1>
      </div>
      <PlantCard filter={"promo"} />
    </section>
  );
};

export default SalesPlants;
