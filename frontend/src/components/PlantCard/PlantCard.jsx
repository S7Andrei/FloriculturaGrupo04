/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "./styles.css";

import CardContent from "../CardContent/CardContent";

const PlantCard = ({ listagemTotal = false, filter }) => {
  const plants = useSelector((state) => state.plants.plants);

  return (
    <>
      {!listagemTotal ? (
        <div className="product-list">
          {plants
            .filter((plant) => plant.isInSale === filter)
            .map((plant) => {
              return (
                <CardContent
                  key={plant.id}
                  id={plant.id}
                  name={plant.name}
                  price={plant.price}
                  label={plant.label[1]}
                />
              );
            })}
        </div>
      ) : (
        <div className="product-list">
          {plants.map((plant) => {
            return (
              <CardContent
                key={plant.id}
                id={plant.id}
                name={plant.name}
                price={plant.price}
                label={plant.label[1]}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default PlantCard;
