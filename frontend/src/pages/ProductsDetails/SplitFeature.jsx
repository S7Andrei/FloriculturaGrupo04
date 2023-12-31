/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

const SplitFeature = ({ plantSelected }) => {
  const splitFeatures = plantSelected.features.split(/(?<=\.)\s*/);

  return (
    <div className={styles.features}>
      <div id={styles.featuresDetails}>
        {splitFeatures.map((sentence, index) => (
          <li key={index} id={styles.details}>
            {sentence.trim()}
          </li>
        ))}
      </div>
    </div>
  );
};

export default SplitFeature;
