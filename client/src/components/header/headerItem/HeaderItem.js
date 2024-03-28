import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderItem.css";

const HeaderItem = ({ nav, name }) => {
  return (
    <div className="item">
      <NavLink to={nav}>{name}</NavLink>
    </div>
  );
};

export default HeaderItem;
