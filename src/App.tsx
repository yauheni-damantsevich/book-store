import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Book } from "./layouts/Book/Book";
import { Search } from "./layouts/Search/Search";
import { Cart } from "./layouts/Cart/Cart";
import { MainPage } from "./layouts/Main/Main";
import { Account } from "./layouts/Account/Account";
import { Login } from "./layouts/login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Favorites } from "./layouts/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/1" />} />
        <Route path="/:page" element={<MainPage />}></Route>
        <Route path="/book/:BookId" element={<Book />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/books/book/:BookId" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
