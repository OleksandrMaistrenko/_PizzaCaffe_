import React from "react";
import "./MenuItemForCoffee.css";

const MenuItemForCoffe = ({ coffee }) => {
  const { imageUrl, title, description, sizes, prices, isActive } = coffee;
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const selectedPrice = prices.find(
    (price) => price.size === selectedSize
  ).price;

  return (
    <div className="contain">
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="menu">
        <div className="name">{title}</div>
        <div className="discript">{description}</div>
        <div className="decoration"></div>
        <div className="minicontainer">
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
          <div className="price">{selectedPrice}</div>
        </div>
        <div className="btn_add">
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemForCoffe;
