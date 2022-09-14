import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Book } from "./layouts/Book/Book";
import { MainPage } from "./layouts/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/books/book/:BookId" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
