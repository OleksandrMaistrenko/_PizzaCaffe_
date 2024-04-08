import React from "react";
import "./MainMenuItem.css";
import HeaderItem from "../HeaderItem";
//children зробить для раздвоения// через :slug урок 276

const MainMenuItem = () => {
  return (
    <div className="item">
      <div id="menu">
        <HeaderItem name="Menu" />
      </div>
      <div className="dropdown-menu" id="menuList">
        <ul>
          <li className="pizza">
            <HeaderItem name="Pizza" nav="/pizza" />
          </li>
          <li className="coffee">
            <HeaderItem name="Coffee" nav="/coffee" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenuItem;
