import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

function NavBar({ data }) {
  return (
    <nav>
      <NavLink exact to="/dogs">
        home
      </NavLink>
      {data.map(d => {
        return (
          <NavLink exact to={d.link}>
            {d.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavBar;
