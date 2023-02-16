import "../Search/Search.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "redux/redux-hooks";
import { searchProductList } from "redux/AsyncProductsList/asyncProductSlice";

export const Search = () => {
  const dispatch = useAppDispatch();

  const [textInput, setTextInput] = useState("");
  const onChangeTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTextInput(event.target.value);
  };
  useEffect(() => {
    dispatch(searchProductList(textInput));
  }, [textInput, dispatch]);

  const onClickReset = () => {
    setTextInput("");
  };
  return (
    <form autoComplete="off" className="search" action="">
      <input
        value={textInput}
        onChange={onChangeTextInput}
        type="text"
        placeholder="Search here..."
        maxLength={12}
      />
      <button onClick={onClickReset}> Reset</button>
    </form>
  );
};
