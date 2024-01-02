import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./NotFound.module.css";
import Cacto from "../../assets/404Cactus.png";
import ButtonHome from "../../components/UI/Home/ButtonHome/ButtonHome";

const NotFound = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate(`/`);
  };

  return (
    <>
      <Header />

      <div>
        <div data-custom="erContainer">
          <div>
            <h1 data-custom="titleOps">
              Ops!
              <br />
              You Seem To Have Lost Your Way...
            </h1>
            <div className={styles.btn}>
              <ButtonHome onClick={handleHome}>Home</ButtonHome>
            </div>
          </div>

          <div>
            <img src={Cacto} alt="e" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
