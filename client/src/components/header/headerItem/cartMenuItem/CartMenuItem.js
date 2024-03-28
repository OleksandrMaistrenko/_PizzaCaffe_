import React from "react";
import "./CartMenuItem.css";
import cart from "../../../../pages/cart/cart.png";
import { NavLink } from "react-router-dom";

const CartMenuItem = ({ nav }) => {
  return (
    <div className="item">
      <NavLink to={nav}>
        <button className="cart" id="cart">
          <img className="cart__image" src={cart} alt="Cart" />
          <div className="cart__num" id="cart_num">
            0
          </div>
        </button>
      </NavLink>
    </div>
  );
};

export default CartMenuItem;
