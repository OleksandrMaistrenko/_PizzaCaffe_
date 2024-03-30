import React from "react";
import "./MainMenuitem.css";

const MainMenuItem = () => {
  return (
    <div className="item">
      <a href="#" id="menu">
        Menu
      </a>
      <div className="dropdown-menu" id="menuList">
        <ul>
          <li className="pizza">
            <a href="/pizza">Pizza</a>
          </li>
          <li className="coffee">
            <a href="/coffee">Coffee</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenuItem;
