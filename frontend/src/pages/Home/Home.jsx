import PlantCard from "../../components/PlantCard/PlantCard";
import CarePlants from "./CarePlants/CarePlants.jsx";
import HomeOne from "./HomeOne/HomeOne.jsx";

const Home = () => {
  return (
    <>
      {/*Cabeçario */}
      <HomeOne />
      <CarePlants />
      <h1>Não esta em promoção</h1>
      <PlantCard filter={"notPromo"} />

      <h1>Em promoção</h1>
      <PlantCard filter={"promo"} />
    </>
  );
};

export default Home;
