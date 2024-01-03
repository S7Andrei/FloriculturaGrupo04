import andreiImg from "../../assets/staff/andrei.png";
import felipeImg from "../../assets/staff/felipe.png";
import pedroImg from "../../assets/staff/pedro.png";
import rodrigoImg from "../../assets/staff/rodrigo.png";

import styles from "./AboutUs.module.css";
import MemberComponent from "../../components/MemberComponent/MemberComponent";

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
        <div className={styles.membersContainer}>
          <MemberComponent name={"Andrei"} about={"Sales"} img={andreiImg} />
          <MemberComponent
            name={"Felipe"}
            about={"External Relations"}
            img={felipeImg}
          />
          <MemberComponent
            name={"Pedro"}
            about={"Scientific Manager"}
            img={pedroImg}
          />
          <MemberComponent
            name={"Rodrigo"}
            about={"Caretaker"}
            img={rodrigoImg}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
