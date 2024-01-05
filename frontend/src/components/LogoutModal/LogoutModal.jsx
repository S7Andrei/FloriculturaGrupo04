/* eslint-disable react/prop-types */
import close from "../../assets/close.svg";
import cactuLogout from "../../assets/cactoTriste.png";
import ButtonHome from "../UI/Home/ButtonHome/ButtonHome";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login/Login";

const LogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.login.isLogado);

  const handleLogInOut = () => {
    dispatch(userActions.handleUpdateLogin());
    onClose()
    navigate(`/`);
  };

  return (
    <dialog className={isOpen ? styles.modalContainer : styles.modalOff}>
      <section className={styles.modal}>
        {login ? (
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
