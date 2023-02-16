import { useAppDispatch } from "redux/redux-hooks";
import { Product } from "types";
import "../CartItem/CartItem.css";
import { removeFromCart } from "redux/Cart/cartSlice";

type CartItemProps = Pick<Product, "image" | "title" | "price" | "id">;

export const CartItem = ({ image, price, title, id }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="ProductBlock">
      <div className="Product-img">
        <img src={image} alt={title} />
      </div>
      <div className="Product-title">
        <span>{title}</span>
      </div>
      <span>{price} грн</span>
      <div onClick={handleRemoveFromCart} className="delete">
        &#10007;
      </div>
    </div>
  );
};
