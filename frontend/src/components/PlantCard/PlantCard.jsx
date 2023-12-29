/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import CardContent from "../CardContent/CardContent";
import {useNavigate } from "react-router-dom";

const PlantCard = ({ listagemTotal = false, filter }) => {
  const plants = useSelector((state) => state.plants.plants);
  const carrosel = useRef();

  const [width, setWidth] = useState(0);

  const navigate = useNavigate();

  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth);
  }, []);

  return (
    <motion.div ref={carrosel}>
      <motion.div
        className={styles.productList}
        drag="x"
        dragConstraints={{
          right: 0,
          left: -width,
        }}
      >
        {plants
          .filter((plant) => (listagemTotal ? true : plant.isInSale === filter))
          .map((plant) => (
            <motion.div key={plant.id}>
              <button onClick={() => handleProductDetails(plant.id)}>
                <CardContent
                  id={plant.id}
                  name={plant.name}
                  price={plant.price}
                  label={plant.label[1]}
                />
              </button>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default PlantCard;
