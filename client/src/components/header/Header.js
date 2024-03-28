import React from "react";
import "./Header.css";

import "./Logo.css";
import HeaderItem from "./headerItem/HeaderItem";
import CartMenuItem from "./headerItem/cartMenuItem/CartMenuItem";
import MainMenuItem from "./headerItem/mainMenuItem/MainMenuItem";

function Header() {
  return (
    <nav>
      <div className="header">
        <HeaderItem name="Home" nav="/" />
        <HeaderItem name="About" nav="/about" />
        <div className="logo">Pizza Parmegano</div>
        <MainMenuItem />
        <CartMenuItem nav="/cart" />
      </div>
    </nav>
  );
}

export default Header;
