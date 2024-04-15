import React from "react";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="containerCart">
      <div className="window">
        <div className="hut">
          <div className="yourOrder">Your Order</div>
          <div className="clearAllCart">
            <button onClick={() => dispatch(clearCart())}>clear all</button>
          </div>
        </div>
        <div>
          {items?.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <div className="total">
          <div className="allOrder">Your Orders</div>
          <div className="sum">{totalPrice}</div>
        </div>

        <div>
          <button className="payNowButton">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
