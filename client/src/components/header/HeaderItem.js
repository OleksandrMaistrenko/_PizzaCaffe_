import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderItem.css";

const HeaderItem = (props) => {
  return (
    <div className="item">
      <NavLink to={props.nav}>{props.name}</NavLink>
    </div>
  );
};

export default HeaderItem;
