import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "types";


export const fetchRecommendProducts = createAsyncThunk(
  "product/fetchProduct",
  async (category: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`)
    return (await response.json()) as Product[]
  }

)