import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./NotFound.module.css";
import Cacto from "../../assets/404Cactus.png";

const NotFound = () => {
  return (
    <>
      <Header />

      <div>
        <ul>
          <div data-custom="erContainer">
            <li>
              <div>
                <h1 data-custom="titleOps">
                  Ops!
                  <br />
                  You Seem To Have Lost Your Way...
                </h1>
                <a href="/" data-custom="textDec">
                  <div data-custom="btnbackContainer">HOME</div>
                </a>
              </div>
            </li>
            <li>
              <div>
                <img src={Cacto} alt="e" />
              </div>
            </li>
          </div>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
