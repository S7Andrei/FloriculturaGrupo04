import { useSelector } from "react-redux";

const Home = () => {
  const plants = useSelector((state) => state.plants.plants);

  return (
    <>
      <h1>Home</h1>
      {plants.map((plant) => {
        return <li key={plant.id}>{plant.plantName}</li>;
      })}
    </>
  );
};

export default Home;
