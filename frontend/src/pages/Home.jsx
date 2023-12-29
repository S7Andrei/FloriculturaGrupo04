import PlantCard from "../components/PlantCard/PlantCard";

const Home = () => {
  return (
    <>
      <h1>Não esta em promoção</h1>
      <PlantCard filter={"notPromo"} />

      <h1>Em promoção</h1>
      <PlantCard filter={"promo"} />
    </>
  );
};

export default Home;
