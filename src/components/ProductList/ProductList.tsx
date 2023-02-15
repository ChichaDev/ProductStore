import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAsyncProducts } from "redux/AsyncProductsList/asyncProductsSelector";
import { fetchAllProducts } from "redux/AsyncProductsList/productsAsyncActions";
import { useAppDispatch } from "redux/redux-hooks";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import "../ProductList/ProductList.css";

export const ProductList = () => {
  
  const { productList } = useSelector(selectAsyncProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="Product-container">
      {productList.map((item) => (
        <ProductListItem key={item.id} {...item} />
      ))}
    </div>
  );
};
