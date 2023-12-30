import CarePlants from "./CarePlants/CarePlants.jsx";
import HomeOne from "./HomeOne/HomeOne.jsx";
import SalesPlants from "./SalesPlants/SalesPlants.jsx";

const Home = () => {
  return (
    <>
      {/*Cabeçario */}
      <HomeOne />
      <CarePlants />
      <SalesPlants />
      
    </>
  );
};

export default Home;
