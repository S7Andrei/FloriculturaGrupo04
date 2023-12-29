import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { plantsActions } from "../../store/plants/plantsSlice";
import { useEffect } from "react";
import styles from "./styles.module.css";
import imgPlant from "../../assets/plants.png";

const ProductsDetails = () => {
  const plantSelected = useSelector((state) => state.plants.plantSelected);
  const dispatch = useDispatch();
  const { id } = useParams();
  const plantId = parseInt(id);

  useEffect(() => {
    dispatch(plantsActions.handleGetPlantDetails(plantId));
  }, [plantId, dispatch]);

  console.log(plantSelected);

  //const splitFeatures = plantSelected.features.split(".");
  return (
    <>
      <div className={styles.plantsDetails}>
        <div className={styles.img}>
          <img src={imgPlant} alt="Uma planta" />
        </div>

        <div className={styles.plantContent}>
          <p id={styles.name}>{plantSelected.name}</p>
          <p id={styles.subtitle}>{plantSelected.subtitle}</p>

          <div className={styles.labelContainer}>
            <p id={styles.label}>{plantSelected.label}</p>
            <p id={styles.label}>{plantSelected.label}</p>
          </div>

          <p id={styles.price}>{plantSelected.price}</p>

          <button id={styles.btn}>Check out</button>

          <div className={styles.features}>
            {/* {splitFeatures.map((sentence, index) => (
              <li key={index}>{sentence.trim()}</li>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
