import ProductItem from "./ProductItem";

class OrderItem {
  constructor(id, imageUrl, title, price, count, totalPrice, size) {
    this.price = price;
    this.id = id;
    this.imageUrl = imageUrl;
    this.title = title;
    this.size = size;
    this.count = count;
    this.totalPrice = totalPrice;
  }
}
export default OrderItem;
