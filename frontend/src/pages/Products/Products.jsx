/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";

import CardContent from "../../components/CardContent/CardContent";

import styles from "./styles.module.css";

const Products = ({ listagemTotal = false, filter }) => {
  const plants = useSelector((state) => state.plants.plants);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
          <p>
            <label className={styles.inputLabel}>Search by Name:</label>
            <p>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.inputForm}
              />
            </p>
          </p>

          <p>
            <label className={styles.inputLabel}>Show by Category:</label>
            <p>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.inputSelect}
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </p>
          </p>
        </div>

        <div className={styles.productList}>
          {filteredPlants.map((plant) => (
            <div key={plant.id} className={styles.cardContainer}>
              <CardContent
                id={plant.id}
                name={plant.name}
                price={plant.price}
                label={plant.label[1]}
                discont={plant.discountPercentage}
                isInSale={plant.isInSale}
                img={plant.img}
                onDelete={true}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
