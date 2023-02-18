import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAsyncProducts } from "redux/AsyncProductsList/asyncProductsSelector";
import { fetchAllProducts } from "redux/AsyncProductsList/productsAsyncActions";
import { useAppDispatch } from "redux/redux-hooks";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import "../ProductList/ProductList.css";
import LoaderProductList from "components/ProductList/LoaderProductList/LoaderProductList";

export const ProductList = () => {
  
  const { productList, status } = useSelector(selectAsyncProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  if(status === "loading") {
    return <LoaderProductList/>
  }else{
    return (
      <div className="Product-container">
        {productList.map((item) => (
          <ProductListItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
};
