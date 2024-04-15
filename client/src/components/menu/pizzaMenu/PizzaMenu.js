import React, { useEffect, useState } from "react";
import MenuList from "../menuList/MenuList";
import { getPizzas } from "../../../redux/slices/menuSlice";
import { useSelector, useDispatch } from "react-redux";
import { pizzas } from "../../../../../server/menu/menu.mjs";

const PizzaMenu = () => {
  // const dispatch = useDispatch();
  // const pizzas = useSelector((state) => state.menu.pizzas);

  // useEffect(() => {
  //   dispatch(getPizzas());
  // }, []);

  // if (!Array.isArray(pizzas)) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <MenuList items={pizzas} />
    </div>
  );
};

export default PizzaMenu;
