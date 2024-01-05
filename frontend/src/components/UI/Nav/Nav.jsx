import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Nav.module.css";

function Nav({ children, ...props }) {
  const routes = React.Children.toArray(children);
  return (
    <>
      <NavLink
        {...props}
        className={({ isActive }) =>
          isActive ? classes.active : classes.navLink
        }
      >
        {children}
      </NavLink>

      {routes.map((route, index) => (
        <NavLink
          key={index}
          to={route.path}
          style={{
            marginRight: "10px",
            textDecoration: "none",
            color: "black",
          }}
        >
          {route.name}
        </NavLink>
      ))}
    </>
  );
}

export default Nav;
