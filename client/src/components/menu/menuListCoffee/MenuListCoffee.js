import React from "react";
import MenuItemForCoffe from "./MenuItemForCoffe";
import "./MenuListCoffee.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { coffee } from "../../../../../server/menu/menu";

const MenuListCoffe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider className="mainForAllmenu" {...settings}>
      {coffee.map((coffEl) => {
        return <MenuItemForCoffe key={coffEl.id} coffEl={coffEl} />;
      })}
    </Slider>
  );
};

export default MenuListCoffe;
