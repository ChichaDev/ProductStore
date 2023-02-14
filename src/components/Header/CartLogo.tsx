import "./CartLogo.css";
import ShoppingCartLogo from "../../assets/shopping_cart_icon.png";
import { Link } from "react-router-dom";

export const CartLogo = () => {
  return (
    <div className="ShoppingCartLogo">
      <Link to="/cartpage">
        <img src={ShoppingCartLogo} alt="" />
      </Link>
      <span>2</span>
    </div>
  );
};
