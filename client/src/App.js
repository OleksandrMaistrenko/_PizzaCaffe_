import "./style.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import React from "react";
import { Route, Routes } from "react-router-dom";
import CoffeeMenu from "./components/menu/coffeeMenu/CoffeeMenu";
import PizzaMenu from "./components/menu/pizzaMenu/PizzaMenu";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pizza" element={<PizzaMenu />} />
        <Route path="/coffee" element={<CoffeeMenu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
