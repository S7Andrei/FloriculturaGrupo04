/* eslint-disable react/prop-types */
import CardContent from "../../components/CardContent/CardContent";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Products = ({ listagemTotal = false, filter }) => {
  const plants = useSelector((state) => state.plants.plants);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const filteredPlants = plants.filter(
    (plant) =>
      (listagemTotal || plant.isInSale === filter) &&
      (selectedCategory === "all" || plant.label[1] === selectedCategory) &&
      (searchTerm.trim() === "" ||
        plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const categoryOptions = ["all", "indoor", "outdoor"];

  return (
    <>
      <div className={styles.productContainer}>
        <h1 className={styles.productTitle}>
          check out all our <span id={styles.colorGreen}>plants</span>
        </h1>

        <div className={styles.querysContainer}>
          <div>
            <label className={styles.inputLabel}>
              Search by Name:
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.inputForm}
              />
            </label>
          </div>

          <div>
            <label className={styles.inputLabel}>
              Show by Category:
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.inputForm}
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className={styles.productList}>
          {filteredPlants.map((plant) => (
            <div key={plant.id}>
              <button onClick={() => handleProductDetails(plant.id)}>
                <CardContent
                  id={plant.id}
                  name={plant.name}
                  price={plant.price}
                  label={plant.label[1]}
                  discont={plant.discountPercentage}
                  isInSale={plant.isInSale}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
