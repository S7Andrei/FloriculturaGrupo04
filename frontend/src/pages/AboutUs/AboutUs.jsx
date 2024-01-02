import andreiImg from "../../assets/staff/andrei.png";
import felipeImg from "../../assets/staff/felipe.jpeg";
import pedroImg from "../../assets/staff/pedro.png";
import rodrigoImg from "../../assets/staff/rodrigo.png";

import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <article id="about-us">
        <h1>AboutUs</h1>
        <p>
          We're an initiave which aims to spread information on how to take care
          of the most common home plants! We also sell some selected species!{" "}
        </p>
        <h1>Our members</h1>
        <div id="member">
          <h2>Andrei</h2>
          <p>Sales</p>
          <img className={styles.staff-pic} src={andreiImg} alt="Picure of Andrei" />
        </div>
        <div id="member">
          <h2>Felipe</h2>
          <p>External Relations</p>
          <img className={styles.staff-pic}  src={felipeImg} alt="Picure of Felipe" />
        </div>
        <div id="member">
          <h2>Pedro</h2>
          <p>Scientific Manager</p>
          <img className={styles.staff-pic}  src={pedroImg} alt="Picure of Pedro" />
        </div>
        <div id="member">
          <h2>Felipe</h2>
          <p>Caretaker</p>
          <img className={styles.staff-pic}  src={rodrigoImg} alt="Picure of Rodrigo" />
        </div>
      </article>
    </>
  );
};

export default AboutUs;
