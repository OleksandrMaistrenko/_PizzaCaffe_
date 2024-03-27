import MenuItem from "./models/MenuItem";
import paperoni from "../../client/src/pages/menu/paperoni.jpg";
import carbonara from "../../client/src/pages/menu/carbonara.jpg";
import deMare from "../../client/src/pages/menu/deMare.jpg";
import margarita from "../../client/src/pages/menu/margarita.png";
import proshutto from "../../client/src/pages/menu/proshutto.png";
import speciale from "../../client/src/pages/menu/speciale.png";
import capuccino from "../../client/src/pages/menu/capuccino.png";
import latte from "../../client/src/pages/menu/latte.png";
import espresso from "../../client/src/pages/menu/espresso.png";
import americano from "../../client/src/pages/menu/americano.png";

export const pizzas = [
  new MenuItem(
    1,
    paperoni,
    "Paperoni",
    "beef and cured pork, paperoni paprika, garlic, black pepper, crushed red pepper, cayenne ",
    ["S", "L"],
    [
      { size: "S", price: 10 },
      { size: "L", price: 15 },
    ],
    false
  ),

  new MenuItem(
    2,
    carbonara,
    "Carbonara",
    "Creamy sauce with bacon, eggs, and Parmesan cheese",
    ["S", "L"],
    [
      { size: "S", price: 10 },
      { size: "L", price: 15 },
    ],
    true
  ),
  new MenuItem(
    3,
    deMare,
    "DeMare",
    "Seafood pizza with shrimp, mussels, calamari, and octopus",
    ["S", "L"],
    [
      { size: "S", price: 10 },
      { size: "L", price: 15 },
    ],
    true
  ),
  new MenuItem(
    4,
    margarita,
    "Margheritta",
    "Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt ",
    ["S", "L"],
    [
      { size: "S", price: 10 },
      { size: "L", price: 15 },
    ],
    true
  ),
  new MenuItem(
    5,
    proshutto,
    "Prosciutto",
    "dough with a drizzle of olive oil, some fresh mozzarella, and a few pieces of prosciutto",
    ["S", "L"],
    [
      { size: "S", price: 10 },
      { size: "L", price: 15 },
    ],
    true
  ),
  new MenuItem(
    6,
    speciale,
    "Speciale",
    "Bacon, smoked chicken, champignons, cherry tomatoes, mozzarella cheese, cream sauce, barbecue sauce, fried onions, wheat dough",
    ["S", "L"],
    [
      { size: "S", price: 10 },
      { size: "L", price: 15 },
    ],
    true
  ),
];

export const coffee = [
  new MenuItem(
    7,
    capuccino,
    "Capuccino",
    ["S", "M", "L"],
    [
      { size: "S", price: 10 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ]
  ),
  new MenuItem(
    8,
    latte,
    "Latte",
    ["S", "L"],
    [
      { size: "S", price: 10 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ]
  ),
  new MenuItem(
    9,
    espresso,
    "Espresso",
    ["S", "M", "L"],
    [
      { size: "S", price: 10 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ]
  ),
  new MenuItem(
    10,
    americano,
    "Americano",
    ["S", "M", "L"],
    [
      { size: "S", price: 10 },
      { size: "M", price: 15 },
      { size: "L", price: 20 },
    ]
  ),
];

//акции
