import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Book } from "./layouts/Book/Book";
import { Search } from "./layouts/Book/Search/Search";
import { Cart } from "./layouts/Cart/Cart";
import { MainPage } from "./layouts/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/books/book/:BookId" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/books/book/:BookId" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
