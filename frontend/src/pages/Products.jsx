import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePlant } from "../store/plants/plantsAction";
import { NavLink } from "react-router-dom";

const Products = () => {

  const plants = useSelector((state) => state.plants.plants);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePlant(id));
  };

  return (
    <>
      <h1>Products</h1>

      {plants.map((plant) => {
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

export default Products;
