import styles from "./Footer.module.css";
import logo from "../../assets/logowhite.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footerContent}>
      <div className={`${styles.footerContainer} ${styles.fresh}`}>
        <ul className={styles.footerList}>
          <li>
            <h1 className={styles.footerTitle}>Stay Fresh</h1>
          </li>
          <li>
            <h3 className={styles.footerInfo}>compassinhos@gmail.com</h3>
          </li>
          <li>
            <h3 className={styles.footerInfo}>+55 41 99999-9999</h3>
          </li>
        </ul>

        <div className={styles.LinkCommunityContainer}>
          <ul className={styles.footerList}>
            <li>
              <h2 className={styles.footerSubtitle}>Links</h2>
            </li>
            <li className={styles.footerInfo}>
              <Link to={"/about-us"}>About us</Link>
            </li>
            <li className={styles.footerInfo}>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <h3 className={styles.footerInfo}>Blogs</h3>
            </li>
        
          </ul>

          <ul className={styles.footerList}>
            <li>
              <h2 className={styles.footerSubtitle}>Community</h2>
            </li>
            <li className={styles.footerInfo}>
              <Link to={"/about-us"}>About us</Link>
            </li>
            <li className={styles.footerInfo}>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <h3 className={styles.footerInfo}>Blogs</h3>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.footerContainer} ${styles.line}`}>
        <figure>
          <img src={logo} alt="" style={{ width: "50px" }} />
        </figure>
        <ul className={styles.footerList}>
          <li>
            <h3 className={styles.rights}>
              Compassinhos ®. All rights <br /> reserved.
            </h3>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
