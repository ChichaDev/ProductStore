import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "types";


export const fetchAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    return (await response.json()) as Product[]
  }

)

export const fetchCategoryProduct = createAsyncThunk(
  "products/fetchCategory",
  async (category: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    return (await response.json()) as Product[]
  }
)