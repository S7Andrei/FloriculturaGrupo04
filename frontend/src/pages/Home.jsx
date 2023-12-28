import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePlant } from "../store/plants/plantsAction";
import { NavLink } from "react-router-dom";

const Home = () => {
  const plants = useSelector((state) => state.plants.plants);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePlant(id));
  };

  return (
    <>
      <h1>Home indoor</h1>
      {plants
        .filter((plant) => plant.label === "indoor")
        .map((plant) => {
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
      <h1>outdoor</h1>
      {plants
        .filter((plant) => plant.label === "outdoor")
        .map((plant) => {
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

export default Home;
