import "./CartItem.css";
import { addToCart, decreaseCount } from "../../../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="containerCart">
      <div className="window">
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
            <button className="btn_clear">X</button>
          </div>
        </div>
        <div className="total">
          <div className="allOrder">Your Orders</div>
          <div className="sum">{item.totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
