import { createSlice } from "@reduxjs/toolkit";
import { Product } from "types";
import { fetchRecommendProducts } from "./productPageActions";

type productPage = {
  status: "idle" | "loading" | "resolved " | "rejected",
  productPage: Product[]
}

const initialState: productPage = {
  status: "idle",
  productPage: []
}

const productPageSlice = createSlice({
  name: "@productPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchRecommendProducts.pending, (state) => {
      state.status = "loading"
    })
    .addCase(fetchRecommendProducts.fulfilled, (state, action) => {
      state.status = "resolved ";
      state.productPage = action.payload ;
    })
    .addCase(fetchRecommendProducts.rejected, (state) => {
      state.status = "rejected"
    })
    
  }
});

export default productPageSlice.reducer