import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAsyncProducts } from "redux/asyncProductsSelector";
import { fetchAllProducts } from "redux/productsAsyncActions";
import { useAppDispatch } from "redux/redux-hooks";
import { ProductItem } from "../ProductItem/ProductItem";
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
        <ProductItem key={item.id} {...item} />
      ))}
    </div>
  );
};
