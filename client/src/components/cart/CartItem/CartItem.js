import "./CartItem.css";
import {
  addToCart,
  decreaseCount,
  clearCart,
} from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(decreaseCount({ ...item, count: 1 }));
  };

  return (
    <div className="containerCart">
      <div className="window">
        <div className="hut">
          <div className="yourOrder">Your Ord</div>
          <div className="clearAllCart">
            <button onClick={() => dispatch(clearCart())}>clear all</button>
          </div>
        </div>
        <div className="functionalWindow">
          <div className="blockImage">
            <div>
              <img src={item.imageUrl} />
            </div>
            <div className="name">{item.title}</div>
            <div className="size">{item.size}</div>
          </div>
          <div className="blockCounter">
            <button
              className="minus"
              onClick={() => dispatch(decreaseCount(item))}
            >
              -
            </button>
            <div className="count">{item.count}</div>
            <button className="plus" onClick={() => dispatch(addToCart(item))}>
              +
            </button>
          </div>
          <div className="blockPrice">{item.price}</div>
          <div className="clear">
            <button className="btn_clear" onClick={handleRemoveItem}>
              X
            </button>
          </div>
        </div>
        <div className="total">
          <div className="allOrder">Your Orders</div>
          <div className="sum">{item.totalPrice}</div>
        </div>

        <div>
          <button className="payNowButton">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
