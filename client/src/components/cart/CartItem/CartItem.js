import React, { useState } from "react";
import "./CartItem.css";
import paperoni from "../../../pages/menu/paperoni.jpg";

const CartItem = () => {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((previusValue) => previusValue - 1);
  }
  function increment() {
    setCount((previusValue) => previusValue + 1);
  }
  return (
    <div className="containerCart">
      <div className="window">
        <div className="hut">
          <div className="yourOrder">Your Order</div>
          <div className="clearAllCart">
            <button>clear all</button>
          </div>
        </div>
        <div className="functionalWindow">
          <div className="blockImage">
            <div>
              <img src={paperoni} />
            </div>
            <div className="name">Papperoni</div>
            <div className="size">M</div>
          </div>
          <div className="blockCounter">
            <button className="minus" onClick={decrement}>
              -
            </button>
            <div className="count">{count}</div>
            <button className="plus" onClick={increment}>
              +
            </button>
          </div>
          <div className="blockPrice">20 euro</div>
          <div className="clear">
            <button className="btn_clear">X</button>
          </div>
        </div>
        <div className="total">
          <div className="allOrder">Your Orders</div>
          <div className="sum">Order Price:50 euro</div>
        </div>
        <div>
          <button className="payNowButton">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
