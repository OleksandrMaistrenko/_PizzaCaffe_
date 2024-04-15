import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffee: [],
  pizzas: [],
};
export const getPizzas = createAsyncThunk("menu/getPizzas", async () => {
  const response = await fetch("http://localhost:1234/pizzas");
  console.log(response);
  const responseData = await response.json();
  console.log(responseData);

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
