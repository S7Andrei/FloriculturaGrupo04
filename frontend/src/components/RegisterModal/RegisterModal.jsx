/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import close from "../../assets/RegisterModalImg/close.svg";
import cactuSucess from "../../assets/RegisterModalImg/cactuSucess.png";
import ButtonHome from "../UI/Home/ButtonHome/ButtonHome";

const RegisterDialog = ({ isOpen, onClose, lastID }) => {
  const navigate = useNavigate();
  const handleProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <dialog className={isOpen ? styles.modalContainer : styles.modalOff}>
      <section className={styles.modal}>
        <div id={styles.btnClose}>
          <button onClick={onClose}>
            <img src={close} id={styles.img} />
          </button>
        </div>
        
        <p className={styles.title}>Plant registered successfully!</p>

        <div className={styles.imgContainer}>
          <img src={cactuSucess} id={styles.cactuSucess} />
        </div>

        <ButtonHome onClick={() => handleProduct(lastID)}>
          See Plant
        </ButtonHome>
      </section>
    </dialog>
  );
};

export default RegisterDialog;
