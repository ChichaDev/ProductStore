import "../CartItem/CartItem.css";

export const CartItem = () => {
  return (
    <div className="ProductBlock">
      <div className="Product-img">
        <img
          src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
          alt=""
        />
      </div>

      <div className="Product-title">
        <span>
          Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
        </span>
      </div>
      <span>1235 грн</span>
      <div className="delete">&#10007;</div>
    </div>
  );
};
