 
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import BasketSlice from "../features/BasketSlice";  
const store = configureStore({
  reducer: {
    basket:BasketSlice,
  },
});

export default store;
export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();