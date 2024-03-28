import React from "react";
import MenuList from "../menuList/MenuList";
import { coffee } from "../../../../../server/menu/menu";

const CoffeeMenu = () => {
  return (
    <div>
      <MenuList items={coffee} />
    </div>
  );
};

export default CoffeeMenu;
