import "./ProductListItem.css";
import ShoppingCartIcon from "../../assets/shopping_cart_icon.png";
import CartAdded from "assets/cart_added.png";
import FavoriteIcon from "../../assets/favorite_icon.png";
import PreviewIcon from "../../assets/search_icon.png";
import { Product } from "types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "redux/redux-hooks";
import { addToCart, removeFromCart } from "redux/Cart/cartSlice";
import { selectCart } from "redux/Cart/cartSelector";
import { useSelector } from "react-redux";

type ProductListItemProps = Pick<Product, "image" | "price" | "title" | "id">;

export const ProductListItem = ({
  image,
  price,
  title,
  id,
}: ProductListItemProps) => {
  const dispatch = useAppDispatch();

  const {cartList} = useSelector(selectCart)

  const isProductInCart = cartList.some((product) => product.id === id)

  const handleAddToCart = () => {
    if(isProductInCart){
      dispatch(removeFromCart(id))
    } else {
      dispatch(addToCart({ image, price, title, id }));
    }
    
  };
  return (
    <div className="Product-card">
      <div className="Product-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="Product-card__actions">
        <img
          onClick={handleAddToCart}
          src={isProductInCart? CartAdded : ShoppingCartIcon}
          alt=""
          className="CartIcon"
        />
        <img src={FavoriteIcon} alt="" className="FavoriteIcon" />
        <Link to={`/productpage/${id}`}>
          <img src={PreviewIcon} alt="" className="PreviewIcon" />
        </Link>
      </div>
      <div className="Product-card__info">
        <h3 className="Product-card__title">{title}</h3>
        <span className="Product-card__price">
          <strong>{price} грн</strong>
        </span>
      </div>
    </div>
  );
};
