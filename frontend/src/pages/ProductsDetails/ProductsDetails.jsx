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

  return (
    <>
      <section className={styles.plantDetails}>
        <figure id={styles.img}>
          <img src={imgPlant} alt="Uma planta" />
        </figure>
        <div className={styles.plantContent}></div>
        {plantSelected.name}
      </section>
    </>
  );
};

export default ProductsDetails;
