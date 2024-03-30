import { createSlice } from "@reduxjs/toolkit";
import { pizzas } from "../../../server/menu/menu";

export const goodSlice = createSlice({
  name: "pizza",
  initialState: {
    goods: pizzas,
  },
  reducers: {},
});

export const {} = goodSlice.actions;
export const selectGoods = (state) => state.goods.goods;
export default goodSlice.reducer;
