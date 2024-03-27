import ProductItem from "./ProductItem";

class OrderItem extends ProductItem {
  constructor(id, imageUrl, title, description, price) {
    super(id, imageUrl, title, description);
    this.price = price;
  }
}
export default OrderItem;
