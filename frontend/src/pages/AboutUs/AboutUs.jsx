import andreiImg from "../../assets/staff/andrei.png";
import felipeImg from "../../assets/staff/felipe.png";
import pedroImg from "../../assets/staff/pedro.png";
import rodrigoImg from "../../assets/staff/rodrigo.png";
import plant from "../../assets//plantForm.svg";

import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={styles.aboutUs}>
        <h1 className={styles.aboutH1}>About Us</h1>
        <p className={styles.aboutP}>
          We're an initiave which aims to spread information on how to take care
          of the most common home plants! We also sell some selected species!
          Come browse our website and keep yourself informed with the latest
          news on the most wanted plants for everybody's houses!
        </p>
        <h1 className={styles.aboutTitle}>Our members</h1>
        <div id="member">
          <h2 className={styles.aboutName}>Andrei</h2>
          <p className={styles.aboutP}>Sales</p>
          <img
            className={styles.staffPic}
            src={andreiImg}
            alt="Picure of Andrei"
          />
        </div>
        <div id="member">
          <h2 className={styles.aboutName}>Felipe</h2>
          <p className={styles.aboutP}>External Relations</p>
          <img
            className={styles.staffPic}
            src={felipeImg}
            alt="Picure of Felipe"
          />
        </div>
        <div id="member">
          <h2 className={styles.aboutName}>Pedro</h2>
          <p className={styles.aboutP}>Scientific Manager</p>
          <img
            className={styles.staffPic}
            src={pedroImg}
            alt="Picure of Pedro"
          />
        </div>
        <div id="member">
          <h2 className={styles.aboutName}>Rodrigo</h2>
          <p className={styles.aboutP}>Caretaker</p>
          <img
            className={styles.staffPic}
            src={rodrigoImg}
            alt="Picure of Rodrigo"
          />
        </div>
        <figure id={styles.img}>
          <img src={plant} />
        </figure>
      </div>
    </>
  );
};

export default AboutUs;
