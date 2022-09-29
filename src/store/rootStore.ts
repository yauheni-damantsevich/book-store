import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cardReducer } from "./cards.slice";
import { cartCountReducer } from "./cartCount.slice";
import { searchReducer } from "./search.slice";

import { combineReducers } from "redux";
import { actionTypes, firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { userReducer } from "./user.silce";

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export const rootStore = configureStore({
  reducer: {
    cards: cardReducer,
    cartCount: cartCountReducer,
    search: searchReducer,
    user: userReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR],
      },
    }),
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
