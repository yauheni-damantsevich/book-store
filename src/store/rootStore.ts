import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cardReducer } from "./cards.slice";
// import { cartReducer } from "./cart.slice";
import { cartCountReducer } from "./cartCount.slice";

export const rootStore = configureStore({
  reducer: {
    cards: cardReducer,
    cartCount: cartCountReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
