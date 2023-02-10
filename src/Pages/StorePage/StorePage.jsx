import { ProductList } from "../../components/ProductList/ProductList"
import { SearchAndFilter } from "../../components/SearchAndFilter/SearchAndFilter"
import "../StorePage/StorePage.css"

export const StorePage = () => {

  return (
    <>
      <SearchAndFilter/>
      <ProductList/>
    </>
  )
}