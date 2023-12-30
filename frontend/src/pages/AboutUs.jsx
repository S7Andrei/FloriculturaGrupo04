import andreiImg from "../assets/staff/andrei.png";
import felipeImg from "../assets/staff/felipe.jpeg";
import pedroImg from "../assets/staff/pedro.png";
import rodrigoImg from "../assets/staff/rodrigo.png";

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
          <img src={andreiImg} alt="Picure of Andrei" />
          <p>Sales</p>
        </div>
        <div id="member">
          <h2>Felipe</h2>
          <img src={felipeImg} alt="Picure of Felipe" />
          <p>External Relations</p>
        </div>
        <div id="member">
          <h2>Pedro</h2>
          <img src={pedroImg} alt="Picure of Pedro" />
          <p>Scientific Manager</p>
        </div>
        <div id="member">
          <h2>Felipe</h2>
          <img src={rodrigoImg} alt="Picure of Rodrigo" />
          <p>Caretaker</p>
        </div>
      </article>
    </>
  );
};

export default AboutUs;
