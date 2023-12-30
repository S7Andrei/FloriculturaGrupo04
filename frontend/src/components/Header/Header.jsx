import logo from "../../assets/logo.svg";
import profile from "../../assets/profileLogo.svg";
import { IoMenu } from "react-icons/io5";
import { slide as Menu } from "react-burger-menu";

import styles from "./Header.module.css";
import Nav from "../UI/Nav/Nav";

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
            <Nav to={"/"} end>
              Home
            </Nav>
          </li>
          <li>
            <Nav to={"/register"}>Register</Nav>
          </li>
          <li>
            <Nav to={"/products"}>Products</Nav>
          </li>
          <li>
            <Nav to={"/about-us"}>About us</Nav>
          </li>
        </ul>
      </nav>
      <IoMenu className={styles.mobileNav}>
        <Menu>
          <nav>
            <ul>
              <li>
                <Nav to={"/"} end>
                  Home
                </Nav>
              </li>
              <li>
                <Nav to={"/register"}>Register</Nav>
              </li>
              <li>
                <Nav to={"/products"}>Products</Nav>
              </li>
              <li>
                <Nav to={"/about-us"}>About us</Nav>
              </li>
            </ul>
          </nav>
        </Menu>
      </IoMenu>
      <figure>
        <img src={profile} alt="" style={{ width: "50px" }} />
      </figure>
    </header>
  );
};

export default Header;
