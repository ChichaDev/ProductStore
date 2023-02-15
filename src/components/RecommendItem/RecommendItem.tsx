import { Link } from "react-router-dom";
import { Product } from "types";
import "../RecommendItem/RecommendItem.css";

type RecommendItemProps = Pick<Product, "image" | "title" | "id">;

export const RecommendItem = ({ image, title, id }: RecommendItemProps) => {
  return (
    <div className="ProductContainer__recommendations__container__card">
      <Link to={`/productpage/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
  );
};
