import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div>
        <h2>Sorry</h2>
        <p>That page cannot be found!</p>
        <Link to="..">Back to the homepage...</Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
