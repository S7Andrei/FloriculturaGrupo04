/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
import { useNavigate } from "react-router-dom";

import Login from "../../pages/Login/Login";
import ButtonHome from "../UI/Home/ButtonHome/ButtonHome";

import close from "../../assets/close.svg";
import cactuLogout from "../../assets/cactoTriste.png";

import styles from "./styles.module.css";

const LogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login.isLogado);
  const currentLoginStorage = localStorage.getItem("isLogado");

  const handleLogInOut = () => {
    dispatch(userActions.handleUpdateLogin());
    localStorage.setItem("isLogado", false);
    onClose();
    navigate(`/`);
  };

  return (
    <dialog className={isOpen ? styles.modalContainer : styles.modalOff}>
      <section className={styles.modal}>
        {console.log(localStorage + currentLoginStorage)}
        {console.log(typeof currentLoginStorage)}
        {currentLoginStorage === "true" ? (
          <div>
            <div id={styles.btnClose}>
              <button onClick={onClose}>
                <img src={close} id={styles.img} />
              </button>
            </div>

            <p className={styles.title}>Você deseja sair?</p>
            <p className={styles.subtitle}>Vai mesmo? ...</p>

            <div className={styles.imgContainer}>
              <img src={cactuLogout} id={styles.cactuSucess} />
            </div>

            <ButtonHome onClick={handleLogInOut}>Sair</ButtonHome>
          </div>
        ) : (
          <div>
            <div id={styles.btnClose}>
              <button onClick={onClose}>
                <img src={close} id={styles.img} />
              </button>
            </div>

            <Login onClose={onClose} />
          </div>
        )}
      </section>
    </dialog>
  );
};
export default LogoutModal;
