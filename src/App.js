import "./App.css";
import React, { useState, useEffect } from "react";
// import Example from "./Example";
import Cart from "./component/Cart";
import About from "./component/About";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./component/Shop";
import Sell from "./component/Sell";
import Library from "./component/Library";
import Login from "./component/Login";
import SignupPage from "./component/Signup";
import BuyButton from "./component/Button";

function App() {
  let name = "Kamesh";
  const [cartItems, setCartItems] = useState([]);
  const [books, setBooks] = useState([]);
  const [booksState, setBooksState] = useState([]);
  useEffect(() => {
    // Fetch books data from the backend API

    fetch("http://localhost:4000/books")
      .then((response) => response.json())

      .then((data) => setBooks(data))

      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const addToCart = (book) => {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...book, quantity: 1 },
    ]);
  };
  const handleAddToCart = (book) => {
    setBooksState((prevBooks) =>
      prevBooks.map((prevBook) =>
        prevBook.id === book.id
          ? { ...prevBook, selected: !prevBook.selected }
          : prevBook
      )
    );

    addToCart(book);
  };
  let length = cartItems.length;
  return (
    <Router>
      <div className="App">
        <Header length={length} />

        {/* <Example name={name} /> */}
        <Routes>
          <Route
            path="/about"
            element={
              <About
                name={name}
                addToCart={addToCart}
                cartItems={cartItems}
                books={books}
                handleAddToCart={handleAddToCart}
              />
            }
          />

          <Route path="/Library" element={<Library />} />
          <Route
            path="/Buy"
            element={<Shop books={books} addToCart={addToCart} />}
          />
          <Route path="/Cart" element={<Cart cartItems={cartItems} />} />

          <Route path="/Sell" element={<Sell books={books} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route
            path="/btn"
            element={
              <BuyButton
                addToCart={addToCart}
                handleAddToCart={handleAddToCart}
              />
            }
          />
        </Routes>

        {/* <MyProfile name={name} /> */}
      </div>
    </Router>
  );
}

export default App;
