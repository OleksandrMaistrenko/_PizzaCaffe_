import React from "react";
import MenuList from "../menuList/MenuList";
import { pizzas } from "../../../../../server/menu/menu";

const PizzaMenu = () => {
  return (
    <div>
      <MenuList items={pizzas} />
    </div>
  );
};

export default PizzaMenu;
