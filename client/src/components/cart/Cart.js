import React from "react";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      {items?.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Cart;
