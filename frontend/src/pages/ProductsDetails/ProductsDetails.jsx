import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { plantsActions } from "../../store/plants/plantsSlice";
import styles from "./styles.module.css";
import imgPlant from "../../assets/plants.png";
import ButtonHome from "../../components/UI/Home/ButtonHome/ButtonHome";
import { useEffect, useState } from "react";

const ProductsDetails = () => {
  const [isFetching, setIsFetching] = useState(true);
  const plantSelected = useSelector((state) => state.plants.plantSelected);
  const dispatch = useDispatch();
  const { id } = useParams();
  const plantId = parseInt(id);

  useEffect(() => {
    dispatch(plantsActions.handleGetPlantDetails(plantId));
    setIsFetching(false);
  }, [dispatch, plantId]);

  console.log(plantSelected);

  var { price } = plantSelected;
  price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const handleSearch = () => {
    const plantName = plantSelected.name;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      plantName
    )}`;
  };

  //const splitFeatures = plantSelected.features.split(".");
  return (
    <>
      {!isFetching && (
        <>
          <div className={styles.plantsDetails}>
            <div className={styles.imgContainer}>
              <img src={imgPlant} alt="Uma planta" id={styles.img} />
            </div>

            <div className={styles.plantContent}>
              <p id={styles.name}>{plantSelected.name}</p>
              <p id={styles.subtitle}>{plantSelected.subtitle}</p>

              <div className={styles.labelContainer}>
                {plantSelected.label.map((label) => {
                  return (
                    <p key={label} id={styles.label}>
                      {label}
                    </p>
                  );
                })}
              </div>

              <p id={styles.price}>{price}</p>

              <ButtonHome onClick={handleSearch}>Check out</ButtonHome>
              <div className={styles.features}>
                <p id={styles.price}>Features</p>
                {/* {splitFeatures.map((sentence, index) => (
              <li key={index}>{sentence.trim()}</li>
            ))} */}
              </div>

              <div className={styles.description}>
                <p id={styles.price}>Description</p>
                <p>{plantSelected.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductsDetails;
