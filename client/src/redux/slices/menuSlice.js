import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffee: [],
  pizzas: [],
};
export const getPizzas = createAsyncThunk("menu/getPizzas", async () => {
  const response = await fetch("/pizzas");

  const responseData = await response.json();

  return responseData;
});
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
    });
  },
});

export default menuSlice.reducer;
