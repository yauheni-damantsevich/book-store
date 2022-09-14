import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cardReducer } from "./cards.slice";

export const rootStore = configureStore({
  reducer: {
    cards: cardReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
