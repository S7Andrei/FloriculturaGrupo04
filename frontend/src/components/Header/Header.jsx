import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/*Logo a ser inserida: <img src={} />*/}
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
