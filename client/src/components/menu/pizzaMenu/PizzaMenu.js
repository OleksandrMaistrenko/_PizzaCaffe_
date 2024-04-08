import React, { useEffect, useState } from "react";
import MenuList from "../menuList/MenuList";
import { getPizzas } from "../../../redux/slices/menuSlice";
import { useSelector, useDispatch } from "react-redux";

const PizzaMenu = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.menu.pizzas);

  useEffect(() => {
    dispatch(getPizzas());
  }, []);

  return (
    <div>
      <MenuList items={pizzas} />
    </div>
  );
};

export default PizzaMenu;
