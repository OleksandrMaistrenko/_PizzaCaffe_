import React from "react";
import "./Home.css";
import CartMenuItem from "../header/headerItem/cartMenuItem/CartMenuItem";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        With our pizza you will take a little trip through real Italy
      </div>
      <div className="pepositions">Today's Special</div>
    </div>
  );
};

export default Home;
