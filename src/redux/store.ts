import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "redux/AsyncProductsList/asyncProductSlice"
import productPageReducer from "redux/AsyncProductPage/asyncProductPageSlice"
import filterReducer from "redux/AsyncFilter/asyncFilterSlice"
import cartReducer from "redux/Cart/cartSlice"

const rootRducer = combineReducers({
  asyncProducts: productsReducer,
  asyncProductPage: productPageReducer,
  asyncFilter: filterReducer,
  cart: cartReducer,

});

export const store = configureStore({
  reducer: rootRducer,
});
//export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
