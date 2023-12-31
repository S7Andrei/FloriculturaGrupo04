/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import image1 from "../../assets/plants.png";
import image2 from "../../assets/plants2.png";
import image3 from "../../assets/plants3.png";
import image4 from "../../assets/plants4.png";

const getRandomImage = () => {
  const images = [image1, image2, image3, image4];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const CardContent = ({ id, name, price, label, discont, isInSale }) => {
  console.log(isInSale)
  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const numericPrice = parseFloat(price);
  const numericDiscont = parseFloat(discont);
  console.log(numericDiscont, numericPrice);

  const newPrice = numericPrice - (numericPrice * numericDiscont) / 100;

  const newPriceFormated = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(newPrice);

  return (
    <div key={id} className={styles.card}>
      <div>
        <img src={getRandomImage()} alt="Uma bela planta em seu vaso" />
      </div>
      <div className={styles.cardContent}>
        <p id={styles.name}>{name}</p>

        {isInSale == 'promo' ? (
          <div id={styles.priceContainer}>
            <p id={styles.price}>{newPriceFormated}</p>
            <p id={styles.oldPrice}>{priceFormat}</p>
          </div>
        ) : (
          <p id={styles.price}>{priceFormat}</p>
        )}

        <p id={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default CardContent;
