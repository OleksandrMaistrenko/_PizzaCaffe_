import React from "react";
import "./Home.css";
import { promoutions } from "../../../../server/menu/menu.js";

import MenuItem from "../menu/menuItem/MenuItem.js";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        With our pizza you will take a little trip through real Italy
        {promoutions.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
