import React from "react";
import "./Cart.css";
import cart from "../../pages/cart/cart.png";

const Cart = () => {
  return (
    <div>
      <button className="cart" id="cart">
        <img className="cart__image" src={cart} alt="Cart" />
        <div className="cart__num" id="cart_num">
          0
        </div>
      </button>
    </div>
  );
};

export default Cart;
