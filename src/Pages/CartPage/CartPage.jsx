import { CartItem } from "../../components/CartItem/CartItem";
import "../CartPage/CartPage.css";

export const CartPage = () => {
  return (
    <div className="wrapper">
      <div className="CartBlock">
        <CartItem />
        <CartItem />
        <div className="totalPrice">
          <span>Итого: 1235грн</span>
        </div>
      </div>
    </div>
  );
};
