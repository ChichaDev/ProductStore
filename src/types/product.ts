import { Category } from "./category"

export type Product = {
  id: number,
  title: string,
  price: number,
  category: Category,
  image: string,
  description: string,
  rating?: {
    rate: number,
    count: number
  }
}