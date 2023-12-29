import { NavLink } from "react-router-dom";

import classes from "./Nav.module.css";

function Nav({ children, ...props }) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        isActive ? classes.active : classes.navLink
      }
    >
      {children}
    </NavLink>
  );
}

export default Nav;
