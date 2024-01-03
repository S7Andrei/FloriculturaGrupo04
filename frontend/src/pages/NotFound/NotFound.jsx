import { Link} from "react-router-dom";

import styles from "./NotFound.module.css";
import Cacto from "../../assets/404Cactus.png";
import ButtonHome from "../../components/UI/Home/ButtonHome/ButtonHome";

const NotFound = () => {
  return (
    <>
      <div>
        <div data-custom="erContainer">
          <div>
            <h1 data-custom="titleOps">
              Ops!
              <br />
              You Seem To Have Lost Your Way...
            </h1>
            <ButtonHome>
              <Link to="/">Home</Link>
            </ButtonHome>
          </div>

          <div data-custom="imgC">
            <img src={Cacto} alt="e" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
