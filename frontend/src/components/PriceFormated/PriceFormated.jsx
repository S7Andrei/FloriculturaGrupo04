/* eslint-disable react/prop-types */
//import styles from './styles.module.css'

const PriceFormated = ({price, discont, isInSale, styles}) => {
    const priceFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
    
      const numericPrice = parseFloat(price);
      const numericDiscont = parseFloat(discont);
    
      const newPrice = numericPrice - (numericPrice * numericDiscont) / 100;
    
      const newPriceFormated = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(newPrice);

  return (
    <div>
        {isInSale == 'promo' ? (
          <div id={styles.priceContainer}>
            <p id={styles.price}>{newPriceFormated}</p>
            <p id={styles.oldPrice}>{priceFormat}</p>
          </div>
        ) : (
          <p id={styles.price}>{priceFormat}</p>
        )}
    </div>
  )
}

export default PriceFormated