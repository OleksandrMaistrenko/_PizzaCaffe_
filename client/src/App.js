import "./style.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import React from "react";
import MenuListCoffe from "./components/menu/menuListCoffee/MenuListCoffee";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menulistcoffe" element={<MenuListCoffe />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
