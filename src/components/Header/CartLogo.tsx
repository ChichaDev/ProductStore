import "./CartLogo.css";
import ShoppingCartLogo from "../../assets/shopping_cart_icon.png";
import { Link } from "react-router-dom";
import { selectCart } from "redux/Cart/cartSelector";
import { useSelector } from "react-redux";

export const CartLogo = () => {
  const { cartList } = useSelector(selectCart)
  return (
    <div className="ShoppingCartLogo">
      <Link to="/cartpage">
        <img src={ShoppingCartLogo} alt="" />
      </Link>
      {cartList.length > 0 && <span>{cartList.length}</span>}
    </div>
  );
};
