import "../ProductPage/ProductPage.css";
import CartIcon from "../../assets/shopping_cart_icon.png";
import { RecommendItem } from "../../components/RecommendItem/RecommendItem";

export const ProductPage = () => {
  return (
    <div className="Container">
      <div className="ProductContainer">
        <div className="ProductContainer__details">
          <div className="ProductContainer__img">
            <img
              src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
              alt=""
            />
          </div>
          <div className="ProductContainer__info">
            <div className="ProductContainer__title">
              <h1>Rain Jacket Women Windbreaker Striped Climbing Raincoats"</h1>
            </div>
            <div className="ProductContainer__description">
              <h2>
                Lightweight perfet for trip or casual wear---Long sleeve with
                hooded, adjustable drawstring waist design. Button and zipper
                front closure raincoat, fully stripes Lined and The Raincoat has
                2 side pockets are a good size to hold all kinds of things, it
                covers the hips, and the hood is generous but doesn't overdo
                it.Attached Cotton Lined Hood with Adjustable Drawstrings give
                it a real styled look.
              </h2>
            </div>
            <div className="ProductContainer__order">
              <span>1369 грн</span>
              <img src={CartIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="ProductContainer__recommendations">
          <span>Смотрите так же:</span>
          <div className="ProductContainer__recommendations__container">
            <RecommendItem />
            <RecommendItem />
            <RecommendItem />
            <RecommendItem />
          </div>
        </div>
      </div>
    </div>
  );
};
