import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const params = useParams();

  return <h1>ProductsDetails, id: {params.id}</h1>;
};

export default ProductsDetails;
