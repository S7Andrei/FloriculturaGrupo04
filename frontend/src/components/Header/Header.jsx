import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { slide as Menu } from "react-burger-menu";

import logo from "../../assets/logo.svg";
import profile from "../../assets/profileLogo.svg";

import Nav from "../UI/Nav/Nav";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import hamburguerMenuStyles from "./mbBreak";
import { useSelector } from "react-redux";
import LogoutModal from "../LogoutModal/LogoutModal";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showDialog, setShowDialog] = useState(false);

  const login = useSelector((state) => state.login.isLogado);

  const handleMenuOpen = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  const handleHome = () => {
    navigate("/");
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleLog = () => {
    setShowDialog((prevState) => !prevState)
  }

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
  if (windowSize <= 768) {
    mobileBreakPoint = true;
  }

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <button onClick={handleHome}>
          <figure>
            <img
              src={logo}
              alt=""
              style={{ width: "50px", marginLeft: "100px" }}
            />
          </figure>
        </button>

        <nav className={styles.desktopNav}>
          {console.log(login)}
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
        <button onClick={handleLog}>
          <figure>
            <img
              src={profile}
              alt=""
              style={{ width: "50px", marginRight: "100px" }}
            />
          </figure>
        </button>
      </header>

      <LogoutModal isOpen={showDialog} onClose={closeDialog} />
    </div>
  );
};

export default Header;
