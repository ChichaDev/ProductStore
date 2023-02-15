import "../ProductPage/ProductPage.css";
import { RecommendItem } from "../../components/RecommendItem/RecommendItem";
import { selectAsyncProducts } from "redux/AsyncProductsList/asyncProductsSelector";
import { selectAsyncProductPage } from "redux/AsyncProductPage/asyncProductPageSelector";
import { useSelector } from "react-redux";
import { ProductPageItem } from "components/ProductPageItem/ProductPageItem";
import { useEffect } from "react";
import { useAppDispatch } from "redux/redux-hooks";
import { fetchRecommendProducts } from "redux/AsyncProductPage/productPageActions";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { productList } = useSelector(selectAsyncProducts);
  const singleProduct = productList.filter((el) => el.id === Number(id));
  const category = singleProduct[0].category;
  

  useEffect(() => {
    if (category) {
      dispatch(fetchRecommendProducts(category));
    }
  }, [category]);

  const { productPage } = useSelector(selectAsyncProductPage);

  return (
    <div className="Container">
      <div className="ProductContainer">
        {singleProduct &&
          singleProduct.map((item) => (
            <ProductPageItem key={item.id} {...item} />
          ))}
        <div className="ProductContainer__recommendations">
          <span>Смотрите так же:</span>
          <div className="ProductContainer__recommendations__container">
            {productPage.map((item) => (
              <RecommendItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
