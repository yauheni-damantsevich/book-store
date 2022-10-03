import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cardReducer } from "./cards.slice";
import { cartCountReducer } from "./cartCount.slice";
import { searchReducer } from "./search.slice";

import { combineReducers } from "redux";
import { actionTypes, firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { userReducer } from "./user.silce";
import { favoritesReducer } from "./favorites.slice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const reducers = combineReducers({
  cards: cardReducer,
  cartCount: cartCountReducer,
  search: searchReducer,
  user: userReducer,
  favorites: favoritesReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const rootStore = configureStore({
  reducer: persistedReducer,
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
