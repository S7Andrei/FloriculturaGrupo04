import PlantCard from "../../components/PlantCard/PlantCard";
import './styles.css'

const Products = () => {
  return (
    <>
      <h1>Listagem completa</h1>
      <div className="product-list">
        <PlantCard listagemTotal={true} />
      </div>
    </>
  );
};

export default Products;
