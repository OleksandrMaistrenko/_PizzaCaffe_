import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goodSclice";

export default configureStore({
  reducer: {
    goods: goodsReducer,
  },
});
