/* eslint-disable react/prop-types */
import close from "../../assets/close.svg";
import cactuSucess from "../../assets/cactuSucess.png";
import ButtonHome from "../UI/Home/ButtonHome/ButtonHome";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogInOut = () => {
    dispatch(userActions.handleUpdateLogin());

    navigate(`/`);
  };

  return (
    <dialog className={isOpen ? styles.modalContainer : styles.modalOff}>
      <section className={styles.modal}>
        <div id={styles.btnClose}>
          <button onClick={onClose}>
            <img src={close} id={styles.img} />
          </button>
        </div>

        <p className={styles.title}>Você deseja sair?</p>

        <div className={styles.imgContainer}>
          <img src={cactuSucess} id={styles.cactuSucess} />
        </div>

        <ButtonHome onClick={handleLogInOut}>Sair</ButtonHome>
      </section>
    </dialog>
  );
};

export default LogoutModal;
