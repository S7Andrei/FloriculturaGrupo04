import PlantCard from "../components/PlantCard/PlantCard";

const Home = () => {
  return (
    <>
      <PlantCard />
      <h1>Home</h1>

      <h1>Outdoor</h1>
      <PlantCard filter={'outdoor'}/>

      <h1>Indoor</h1>
      <PlantCard filter={'indoor'}/>
    </>
  );
};

export default Home;
