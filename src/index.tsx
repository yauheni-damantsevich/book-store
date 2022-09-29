import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { rootStore as store } from "./store/rootStore";

import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCFKJ5XKYWhANYWe4QaKnMEaTaKAxIdUMY",
  authDomain: "book-store-26901.firebaseapp.com",
  projectId: "book-store-26901",
  storageBucket: "book-store-26901.appspot.com",
  messagingSenderId: "613612601617",
  appId: "1:613612601617:web:e4f54bd1708206ac8b4cb0",
  measurementId: "G-FLRKXQ37XW",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
