import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? cl.activeLink : "")}
          end
        >
          Todo
        </NavLink>

        <NavLink
          to="/weather"
          className={({ isActive }) => (isActive ? cl.activeLink : "")}
        >
          Weather
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
