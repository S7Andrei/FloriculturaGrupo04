import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profileLogo.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      {/*Logo a ser inserida: <img src={} />*/}
      <figure>
        <img src={logo} alt="" style={{ width: "50px" }} />
      </figure>
      <nav>
        <ul className={styles.navBar}>
          <li>
            <NavLink to={"/"} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About us</NavLink>
          </li>
        </ul>
      </nav>
      <figure>
        <img src={profile} alt="" style={{ width: "50px" }} />
      </figure>
    </header>
  );
};

export default Header;
