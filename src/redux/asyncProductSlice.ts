import { createSlice } from "@reduxjs/toolkit";
import { Product } from "types";
import { fetchAllProducts } from "./productsAsyncActions";

type productSlice = {
  status: "idle" | "loading" | "resolved " | "rejected",
  productList: Product[]
}

const initialState: productSlice = {
  status: "idle",
  productList: []
}

const productSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllProducts.pending, (state) => {
      state.status = "loading"
    })
    .addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = "resolved ";
      state.productList = action.payload;
    })
    .addCase(fetchAllProducts.rejected, (state) => {
      state.status = "rejected"
    })
    
  }
});

export default productSlice.reducer