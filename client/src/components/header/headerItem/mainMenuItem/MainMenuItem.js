import React from "react";
import { NavLink } from "react-router-dom";

const MainMenuItem = () => {
  return (
    <div className="item">
      <NavLink to="/pizza">Pizza</NavLink>
      <NavLink to="/coffee">Coffe</NavLink>
    </div>
  );
};

export default MainMenuItem;
//тут раздвоение робить дропдаун
