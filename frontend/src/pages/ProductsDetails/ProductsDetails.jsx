import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { plantsActions } from "../../store/plants/plantsSlice";
import styles from "./styles.module.css";
import ButtonHome from "../../components/UI/Home/ButtonHome/ButtonHome";
import { useEffect, useState } from "react";
import SplitFeature from "../../components/SplitFeature/SplitFeature";
import PriceFormated from "../../components/PriceFormated/PriceFormated";

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

  let { price, isInSale, discountPercentage} = plantSelected;

  const handleSearch = () => {
    const plantName = plantSelected.name;
    window.location.href = `https://www.google.com/search?q=Comprar+${encodeURIComponent(
      plantName
    )}`;
  };

  return (
    <>
      {!isFetching && (
        <div className={styles.plantsDetails}>
          <div className={styles.imgContainer}>
            <img src={plantSelected.img} alt="Uma planta" id={styles.img} />
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

            <PriceFormated
              price={price}
              isInSale={isInSale}
              discont={discountPercentage}
              styles={styles}
            />

            <ButtonHome onClick={handleSearch}>Check out</ButtonHome>

            <p id={styles.price}>Features</p>

            <SplitFeature plantSelected={plantSelected} styles={styles} />

            <p id={styles.price}>Description</p>
            <div className={styles.description}>
              <p id={styles.description}>{plantSelected.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsDetails;
