import React from "react";
import CartItem from "./CartItem/CartItem";
import { addToCart, clearCart } from "../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const items = useSelector((state) => state.cart.cartItems);
  console.log(items);
  console.log(totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="hut">
        <div className="yourOrder">Your Ord</div>
        <div className="clearAllCart">
          <button onClick={() => dispatch(clearCart())}>clear all</button>
        </div>
      </div>
      {items?.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <h1>Total: {totalPrice}</h1>
      <div>
        <button className="payNowButton">Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
