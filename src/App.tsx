import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Book } from "./layouts/Book/Book";
import { Search } from "./layouts/Search/Search";
import { Cart } from "./layouts/Cart/Cart";
import { MainPage } from "./layouts/Main/Main";
import { Account } from "./layouts/Account/Account";
import { Login } from "./layouts/login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Favorites } from "./layouts/Favorites/Favorites";
import { Footer } from "./components/Footer/Footer";
import { ResetPassword } from "./layouts/ResetPassword/ResetPassword";
import { HeaderSwitcher } from "./components/HeaderSwitcher/HeaderSwitcher";

function App() {
  return (
    <div className="App">
      <HeaderSwitcher />
      <Routes>
        <Route path="/" element={<Navigate to="/1" />} />
        <Route path="/:page" element={<MainPage />}></Route>
        <Route path="/book/:BookId" element={<Book />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:page" element={<Search />} />
        <Route path="/search/book/:BookId" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset_password" element={<ResetPassword />} />

        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
