import { Product } from "types"
import "../RecommendItem/RecommendItem.css"

type RecommendItemProps = Pick<Product, "image" | "title">

export const RecommendItem = ({image, title}: RecommendItemProps) => {

  return (
    <div className="ProductContainer__recommendations__container__card">
    <img src={image} alt={title}/>
</div>
  )
}