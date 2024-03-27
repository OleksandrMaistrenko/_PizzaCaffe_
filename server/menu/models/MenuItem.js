import ProductItem from "./ProductItem";

class MenuItem extends ProductItem {
  constructor(id, imageUrl, title, description, sizes, prices, isActive) {
    super(id, imageUrl, title, description);
    this.prices = prices;
    this.sizes = sizes;
    this.isActive = isActive;
  }
}
export default MenuItem;
