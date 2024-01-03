/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import PriceFormated from "../PriceFormated/PriceFormated";

const CardContent = ({ id, name, price, label, discont, isInSale, img }) => {

  return (
    <div key={id} className={styles.card}>
      <div>
        <img src={img} alt="Uma bela planta em seu vaso" />
      </div>
      <div className={styles.cardContent}>
        <p id={styles.name}>{name}</p>

        <PriceFormated price={price} discont={discont} isInSale={isInSale} styles={styles}/>
        
        <p id={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default CardContent;
