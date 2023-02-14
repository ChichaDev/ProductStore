import "../ProductItem/ProductItem.css"
import ShoppingCartIcon from "../../assets/shopping_cart_icon.png";
import FavoriteIcon from "../../assets/favorite_icon.png";
import PreviewIcon from "../../assets/search_icon.png";
import { Product } from "types";
import { Link } from "react-router-dom";



type ProductItemProps = Pick<Product, 
"image" | "price" | "title" | "id">


export const ProductItem = ({image,price,title, id}:ProductItemProps) => {
  
  return (
    <div className="Product-card">
        <div className="Product-card__image">
          <img src={image} alt={title}/>
        </div>
        <div className="Product-card__actions">
          <img src={ShoppingCartIcon} alt="" className="CartIcon" />
          <img src={FavoriteIcon} alt="" className="FavoriteIcon" />
          <Link to = {`/productpage/${id}`}>
          <img src={PreviewIcon} alt="" className="PreviewIcon" />
          </Link>
        </div>
        <div className="Product-card__info">
          <h3 className="Product-card__title">
            {title}
          </h3>
          <span className="Product-card__price"><strong>{price} грн</strong></span>
        </div>
      </div>
  )
}