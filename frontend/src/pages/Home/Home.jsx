import PlantCard from "../../components/PlantCard/PlantCard";
import HomeOne from "./HomeOne.jsx";

const Home = () => {
  return (
    <>
      {/*Cabeçario */}
      <HomeOne />
      <h1>Não esta em promoção</h1>
      <PlantCard filter={"notPromo"} />

      <h1>Em promoção</h1>
      <PlantCard filter={"promo"} />
    </>
  );
};

export default Home;
