/* eslint-disable react/prop-types */
//Componentes
import PriceFormated from "../PriceFormated/PriceFormated";

//CSS
import styles from "./styles.module.css";

//Libs
import { useNavigate } from "react-router-dom";
import { deletePlant } from "../../store/plants/plantsAction";
import { useDispatch, useSelector } from "react-redux";

const CardContent = ({ id, name, price, label, discont, isInSale, img }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login.isLogado);

  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deletePlant(id));
  };

  return (
    <div key={id} className={styles.card}>
      <button onClick={() => handleProductDetails(id)}>
        <div>
          <img src={img} alt="Uma bela planta em seu vaso" />
        </div>
      </button>

      <div className={styles.cardContent}>
        <p id={styles.name}>{name}</p>

        <PriceFormated
          price={price}
          discont={discont}
          isInSale={isInSale}
          styles={styles}
        />
        {login && <button onClick={() => handleDelete(id)}>Deletar</button>}

        <p id={styles.label}>{label}</p>
      </div>
    </div>
  );
};

export default CardContent;
