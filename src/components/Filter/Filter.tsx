import "../Filter/Filter.css";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "redux/redux-hooks";
import {
  fetchCategoryProduct,
  fetchAllProducts,
} from "redux/AsyncProductsList/productsAsyncActions";
import { fetchAllCategories } from "redux/AsyncFilter/asyncFilterActions";
import { selectAsyncCategories } from "redux/AsyncFilter/asyncFilterSelector";
import { useClickOutside } from "hooks/useClickOutside";

export const Filter = () => {
  const filterRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(filterRef, () => setOpenDropdown(false));
  const [openDropdown, setOpenDropdown] = useState(false);
  const onClickDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const [currentCategory, setCurrentCategory] = useState("All");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  const { filterCategory } = useSelector(selectAsyncCategories);

  const handleCategory = (item: string) => {
    dispatch(fetchCategoryProduct(item));
    setOpenDropdown(false);
    setCurrentCategory(item);
  };

  const handleGetAllProducts = () => {
    dispatch(fetchAllProducts());
    setOpenDropdown(false);
    setCurrentCategory("All");
  };
  return (
    <div className="Filter" ref={filterRef}>
      <div className="dropdown">
        <button onClick={onClickDropdown} className="dropbtn">
          {currentCategory}
        </button>
        {openDropdown && (
          <div className="dropdown-content show">
            <span onClick={handleGetAllProducts}>All</span>
            {filterCategory.map((item) => (
              <span onClick={() => handleCategory(item)} key={item}>
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
