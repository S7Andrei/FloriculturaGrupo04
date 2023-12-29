/* eslint-disable react/prop-types */
import imgPlant from "../../assets/plants.png";
import styles from './styles.module.css'

const CardContent = ({ id, name, price, label }) => {
  return (
    <div key={id} className={styles.card}>
      <div>
        <img
          src={imgPlant}
          alt="Uma bela planta em seu vaso"
        />
      </div>
      <div className={styles.cardContent}>
        <p id={styles.name}>{name}</p>
        <p id={styles.price}>${price}.00</p>
        <p id={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default CardContent;
