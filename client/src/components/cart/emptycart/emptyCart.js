import React from "react";

import "./emptyCart.css";

const emptyCart = () => {
  return (
    <div className="container">
      <h1>Your Cart</h1>
      <p className="empty-cart">Your cart is empty</p>
      <Link to="/orders" className="back-btn">
        Go to orders
      </Link>
    </div>
  );
};

export default emptyCart;
