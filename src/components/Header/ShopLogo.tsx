import "../Header/ShopLogo.css";
import Logo from "../../assets/shop_logo.jpg";
import { Link } from "react-router-dom";

export const ShopLogo = () => {
  return (
    <div className="ShopLogo">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
};
