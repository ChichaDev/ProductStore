import "./CartLogo.css";
import ShoppingCartLogo from "../../assets/shopping_cart_icon.png";

export const CartLogo = () => {
  return (
    <div className="ShoppingCartLogo">
      <img src={ShoppingCartLogo} alt="" />
      <span>2</span>
    </div>
  );
};
