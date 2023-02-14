import "../ProductPageItem/ProductPageItem.css";
import CartIcon from "assets/shopping_cart_icon.png";
import { Product } from "types";

type ProductPageItemProps = Pick<
  Product,
  "image" | "price" | "title" | "description"
>;

export const ProductPageItem = ({
  description,
  image,
  price,
  title,
}: ProductPageItemProps) => {
  return (
    <div className="ProductContainer__details">
      <div className="ProductContainer__img">
        <img src={image} alt={title} />
      </div>
      <div className="ProductContainer__info">
        <div className="ProductContainer__title">
          <h1>{title}</h1>
        </div>
        <div className="ProductContainer__description">
          <h2>{description}</h2>
        </div>
        <div className="ProductContainer__order">
          <span>{price} грн</span>
          <img src={CartIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
