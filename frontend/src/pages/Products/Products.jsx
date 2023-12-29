/* eslint-disable react/prop-types */
import CardContent from "../../components/CardContent/CardContent";
import './styles.css'
import { useSelector } from "react-redux";

const Products = ({ listagemTotal = false, filter }) => {

  const plants = useSelector((state) => state.plants.plants);

  return (
    <>
      <h1>Listagem completa</h1>
      <div className="product-list">
      {plants
          .filter((plant) => (listagemTotal ? true : plant.isInSale === filter))
          .map((plant) => (
            <div key={plant.id}>
              <CardContent
                id={plant.id}
                name={plant.name}
                price={plant.price}
                label={plant.label[1]}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
