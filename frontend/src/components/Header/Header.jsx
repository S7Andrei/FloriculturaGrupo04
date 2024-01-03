import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { slide as Menu } from "react-burger-menu";

import logo from "../../assets/logo.svg";
import profile from "../../assets/profileLogo.svg";

import Nav from "../UI/Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleMenuOpen = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleWindowsResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowsResize);

    return () => {
      window.removeEventListener("resize", handleWindowsResize);
    };
  }, []);

  let mobileBreakPoint = false;
  if (windowSize < 768) {
    mobileBreakPoint = true;
  }

  let hamburguerMenuStyles = {
    bmOverlay: {
      marginTop: "2em",
      padding: "2em",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.6)",
    },
    bmItem: {
      display: "inline-block",
      padding: "3em",
      fontSize: "1em",
      margin: "1em 20em 1em 2em",
      lineHeight: "2em",
      fontFamily: "Raleway, cursive",
      color: "#FFF",
    },
    bmItemList: {},
    bmMenuWrap: {
      width: "100%",
      height: "40%",
    },
  };

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <figure>
          <img
            src={logo}
            alt=""
            style={{ width: "50px", marginLeft: "100px" }}
          />
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
        {mobileBreakPoint && (
          <Menu
            isOpen={showMenu}
            onClose={handleMenuClose}
            left
            customBurgerIcon={false}
            styles={hamburguerMenuStyles}
          >
            <nav>
              <ul>
                <li>
                  <Nav className={styles.menuItem} to={"/"} end>
                    Home
                  </Nav>
                </li>
                <li>
                  <Nav className="menu-item" to={"/register"}>
                    Register
                  </Nav>
                </li>
                <li>
                  <Nav className="menu-item" to={"/products"}>
                    Products
                  </Nav>
                </li>
                <li>
                  <Nav className="menu-item" to={"/about-us"}>
                    About us
                  </Nav>
                </li>
              </ul>
            </nav>
          </Menu>
        )}
        <figure>
          <img
            src={profile}
            alt=""
            style={{ width: "50px", marginRight: "100px" }}
          />
        </figure>
      </header>
    </div>
  );
};

export default Header;
