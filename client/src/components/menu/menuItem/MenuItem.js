import "./MenuItem.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

const MenuItem = ({ item }) => {
  const { id, imageUrl, title, description, sizes, prices, isActive } = item;
  const [selectedSize, setSelectedSize] = useState(
    sizes ? sizes[0] : "Standard"
  );
  const dispatch = useDispatch();

  const selectedPrice = isActive
    ? prices.find((price) => price.size === selectedSize)?.price
    : "";

  const handleAddToCart = () => {
    const newItem = {
      id: id,
      title: title,
      size: selectedSize,
      price: selectedPrice,
      totalPrice: selectedPrice,
      count: 1,
      imageUrl: imageUrl,
    };

    dispatch(addToCart(newItem));
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className={`contain ${isActive ? "active" : "inactive"}`}>
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="menu">
        <div className="name">{title}</div>
        <div className="discript">{description}</div>
        <div className="decoration"></div>
        <div className="minicontainer">
          {!!sizes && isActive && (
            <div className="size">
              <label htmlFor="size">Size:</label>
              <select
                id="size"
                name="size"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
          {isActive && <div className="price">{selectedPrice}</div>}
        </div>
        {isActive && (
          <div className="btn_add">
            <button onClick={handleAddToCart}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
