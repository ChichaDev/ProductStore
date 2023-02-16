import { createSlice } from "@reduxjs/toolkit";
import { Product } from "types";

type cartSlice = {
  cartList: Product[];
  totalPrice: number;
};

const initialState: cartSlice = {
  cartList: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "@cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartList.push(action.payload);
      state.totalPrice = state.cartList.reduce(
        (sum, item) => item.price + sum,
        0
      );
    },
    removeFromCart(state, action) {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = state.cartList.reduce(
        (sum, item) => item.price + sum,
        0
      );
    },
    clearCart(state) {
      state.cartList = [];
      state.totalPrice = 0;
    },
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
