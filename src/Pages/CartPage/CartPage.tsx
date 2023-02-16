import { CartItem } from "../../components/CartItem/CartItem";
import "../CartPage/CartPage.css";
import { selectCart } from "redux/Cart/cartSelector";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/redux-hooks";
import { clearCart } from "redux/Cart/cartSlice";

export const CartPage = () => {
  const dispatch = useAppDispatch();

  const { cartList, totalPrice } = useSelector(selectCart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="wrapper">
      <div className="CartBlock">
        <div className="clearCart">
          <span onClick={handleClearCart}>Очистить корзину &#10007;</span>
        </div>

        {cartList.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}

        <div className="totalPrice">
          <span>Итого: {totalPrice.toFixed(2)} грн</span>
        </div>
      </div>
    </div>
  );
};
