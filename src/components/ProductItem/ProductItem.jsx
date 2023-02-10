import "../ProductItem/ProductItem.css"
import ShoppingCartIcon from "../../assets/shopping_cart_icon.png";
import FavoriteIcon from "../../assets/favorite_icon.png";
import PreviewIcon from "../../assets/search_icon.png";
export const ProductItem = () => {

  return (
    <div className="Product-card">
        <div className="Product-card__image">
          <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt=""/>
        </div>
        <div className="Product-card__actions">
          <img src={ShoppingCartIcon} alt="" className="CartIcon" />
          <img src={FavoriteIcon} alt="" className="FavoriteIcon" />
          <img src={PreviewIcon} alt="" className="PreviewIcon" />
        </div>
        <div className="Product-card__info">
          <h3 className="Product-card__title">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h3>
          <span className="Product-card__price"><strong>1239 грн</strong></span>
        </div>
      </div>
  )
}