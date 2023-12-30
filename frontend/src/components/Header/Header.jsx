import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { slide as Menu } from "react-burger-menu";

import logo from "../../assets/logo.svg";
import profile from "../../assets/profileLogo.svg";

import Nav from "../UI/Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuOpen = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  return (
    <header className={styles.headerContainer}>
      <figure>
        <img src={logo} alt="" style={{ width: "50px" }} />
      </figure>
      <nav className={styles.desktopNav}>
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
      <IoMenu
        onClick={!showMenu ? handleMenuOpen : handleMenuClose}
        className={styles.mobileNav}
      />
      <Menu
        isOpen={showMenu}
        onClose={handleMenuClose}
        right
        width={"50%"}
        customBurgerIcon={false}
      >
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
      <figure>
        <img src={profile} alt="" style={{ width: "50px" }} />
      </figure>
    </header>
  );
};

export default Header;
