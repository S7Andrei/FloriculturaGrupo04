import styles from "./Footer.module.css";
import bkgreen from "../../assets/bkgreen.png";
import logo from "../../assets/logowhite.svg";

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
            <li>
              <h3 className={styles.footerInfo}>About us</h3>
            </li>
            <li>
              <h3 className={styles.footerInfo}>Products</h3>
            </li>
            <h3 className={styles.footerInfo}>Blogs</h3>
            <li></li>
          </ul>

          <ul className={styles.footerList}>
            <li>
              <h2 className={styles.footerSubtitle}>Community</h2>
            </li>
            <li>
              <h3 className={styles.footerInfo}>About us</h3>
            </li>
            <li>
              <h3 className={styles.footerInfo}>Products</h3>
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
            <h3>Compassinhos ®. All rights reserved.</h3>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
