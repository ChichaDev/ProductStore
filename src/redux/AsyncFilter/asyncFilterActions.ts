import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "types";


export const fetchAllCategories = createAsyncThunk(
  "products/fetchAllCategories",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/categories")
    return (await response.json()) as string[]
  }

)