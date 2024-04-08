import React from "react";

import "./emptyCart.css";

const emptyCart = () => {
  return (
    <div className="containerCart">
      <div className="window">
        <div>
          <button className="payNowButton">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default emptyCart;
