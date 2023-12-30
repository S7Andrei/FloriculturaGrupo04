/* eslint-disable react/prop-types */
import CardContent from "../../components/CardContent/CardContent.jsx";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Products = ({ listagemTotal = false, filter }) => {
  const plants = useSelector((state) => state.plants.plants);

  const navigate = useNavigate();
  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <div className={styles.productContainer}>
        <h1 className={styles.productTitle}>
          check out all our <span id={styles.colorGreen}>plants</span>
        </h1>

        <div className={styles.productList}>
          {plants
            .filter((plant) =>
              listagemTotal ? true : plant.isInSale === filter
            )
            .map((plant) => (
              <div key={plant.id}>
                <button onClick={() => handleProductDetails(plant.id)}>
                  <CardContent
                    id={plant.id}
                    name={plant.name}
                    price={plant.price}
                    label={plant.label[1]}
                  />
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
