import { createSlice, current } from "@reduxjs/toolkit";
import paperoni from "../../pages/menu/paperoni.jpg";

const initialState = {
  cartItems: [
    {
      id: 1,
      title: "paperoni",
      size: "M",
      price: 20,
      totalPrice: 20,
      count: 1,
      imageUrl: paperoni,
    },
  ],
  totalPrice: 0,
  totalCount: 1,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].count += 1;

        state.cartItems[existingItemIndex].totalPrice =
          state.cartItems[existingItemIndex].count * item.price;
      } else {
        state.cartItems.push(item);
      }

      state.totalPrice = state.cartItems.reduce(
        (sum, current) => sum + current.totalPrice,
        0
      );
      state.totalCount++;
    },
    decreaseCount(state, action) {
      const item = action.payload;
      console.log(item);
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (
        existingItemIndex !== -1 &&
        state.cartItems[existingItemIndex].count > 1
      ) {
        state.cartItems[existingItemIndex].count -= 1;
        state.cartItems[existingItemIndex].totalPrice =
          state.cartItems[existingItemIndex].count * item.price;
        state.totalCount--;
      }

      state.totalPrice = state.cartItems.reduce(
        (sum, current) => sum + current.totalPrice,
        0
      );
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, clearCart, decreaseCount } = cartSlice.actions;
export default cartSlice.reducer;
