import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "redux/AsyncProductsList/asyncProductSlice"
import productPageReducer from "redux/AsyncProductPage/asyncProductPageSlice"
import filterReducer from "redux/AsyncFilter/asyncFilterSlice"

const rootRducer = combineReducers({
  asyncProducts: productsReducer,
  asyncProductPage: productPageReducer,
  asyncFilter: filterReducer

});

export const store = configureStore({
  reducer: rootRducer,
});
//export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
