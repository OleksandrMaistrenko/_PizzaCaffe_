import React from "react";
import "./Header.css";
import "./HeaderItem.css";
import "./Logo.css";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <nav>
      <div className="header">
        <HeaderItem name="Home" nav="/" />
        <HeaderItem name="About" nav="/about" />
        <div className="logo">Pizza Parmegano</div>
        <HeaderItem name="Menu" nav="/menu" />
        <HeaderItem name="Cart" nav="/cart" />
      </div>
    </nav>
  );
}

export default Header;
