import "../ProductPageItem/ProductPageItem.css";
import CartIcon from "assets/shopping_cart_icon.png";
import { Product } from "types";
import CartAdded from "assets/cart_added.png";
import { useAppDispatch } from "redux/redux-hooks";
import { addToCart, removeFromCart } from "redux/Cart/cartSlice";
import { selectCart } from "redux/Cart/cartSelector";
import { useSelector } from "react-redux";

type ProductPageItemProps = Pick<
  Product,
  "image" | "price" | "title" | "description" | "id"
>;

export const ProductPageItem = ({
  description,
  image,
  price,
  title,
  id,
}: ProductPageItemProps) => {
  const dispatch = useAppDispatch();

  const { cartList } = useSelector(selectCart);

  const isProductInCart = cartList.some((product) => product.id === id);

  const handleAddToCart = () => {
    if (isProductInCart) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(addToCart({ image, price, title, id }));
    }
  };

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
          <img
            onClick={handleAddToCart}
            src={isProductInCart ? CartAdded : CartIcon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
