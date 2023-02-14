import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "redux/asyncProductSlice"
import productPageReducer from "redux/AsyncProductPage/asyncProductPageSlice"

const rootRducer = combineReducers({
  asyncProducts: productsReducer,
  asyncProductPage: productPageReducer
});

export const store = configureStore({
  reducer: rootRducer,
});
//export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
