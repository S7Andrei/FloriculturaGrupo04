import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { plantsActions } from "../store/plants/plantsSlice";
import { useEffect } from "react";

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
      <h1>Product Details</h1>
      {plantSelected.name}
    </>
  );
};

export default ProductsDetails;
