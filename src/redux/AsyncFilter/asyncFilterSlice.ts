import { createSlice } from "@reduxjs/toolkit";
import { Product } from "types";
import { fetchAllCategories } from "./asyncFilterActions";

type filterSlice = {
  status: "idle" | "loading" | "resolved " | "rejected",
  filterCategory: string[]
}

const initialState: filterSlice = {
  status: "idle",
  filterCategory: []
}

const filterSlice = createSlice({
  name: "@filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllCategories.pending, (state) => {
      state.status = "loading"
    })
    .addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.status = "resolved ";
      state.filterCategory = action.payload;
    })
    .addCase(fetchAllCategories.rejected, (state) => {
      state.status = "rejected"
    })
    
  }
});

export default filterSlice.reducer