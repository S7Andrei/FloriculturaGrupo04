/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePlant, fetchPlantsData } from "../../store/plants/plantsAction";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const PlantCard = ({ filter }) => {
  const plants = useSelector((state) => state.plants.plants);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePlant(id));
  };

  useEffect(() => {
    dispatch(fetchPlantsData());
  }, [dispatch]);

  return (
    <>
      {filter
        ? plants
            .filter((plant) => plant.label === filter)
            .map((plant) => {
              return (
                <div key={plant.id} className="card">
                  <div className="card-content">
                    <li>{plant.plantName}</li>
                    <button
                      type="button"
                      onClick={() => handleDelete(plant.id)}
                    >
                      Deletar
                    </button>

                    <NavLink to={"/products"}>Products</NavLink>
                  </div>
                </div>
              );
            })
        : plants.map((plant) => {
            return (
              <div key={plant.id} className="card">
                <div className="card-content">
                  <li>{plant.plantName}</li>
                  <button type="button" onClick={() => handleDelete(plant.id)}>
                    Deletar
                  </button>

                  <NavLink to={"/products"}>Products</NavLink>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default PlantCard;
