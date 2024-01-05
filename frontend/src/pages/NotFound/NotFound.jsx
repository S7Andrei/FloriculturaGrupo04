import { Link } from "react-router-dom";
import TemplateRoot from "../TemplateRoot";

import styles from "./NotFound.module.css";
import Cacto from "../../assets/NotFoundImg/404Cactus.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
     
        <div data-custom="erContainer">
          <div>
            <h1 data-custom="titleOps">
              Ops!
              <br />
              You Seem To Have Lost Your Way...
            </h1>
            <a href="/">
              <button data-custom="btnBack">Home</button>
            </a>
          </div>

          <div data-custom="imgC">
            <img src={Cacto} alt="e" />
          </div>
        </div>
    

      <Footer />
    </>
  );
};

export default NotFound;