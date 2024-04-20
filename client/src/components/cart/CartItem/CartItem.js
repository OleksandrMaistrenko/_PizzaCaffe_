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
          className="minusM"
          onClick={() => dispatch(decreaseCount(item))}
        >
          -
        </button>
        <div className="count">{item.count}</div>
        <button className="plusP" onClick={() => dispatch(addToCart(item))}>
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
  );
};

export default CartItem;
