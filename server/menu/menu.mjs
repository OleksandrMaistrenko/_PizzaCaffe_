import MenuItem from "./models/MenuItem.mjs";
import paperoni from "../resources/menu/paperoni.jpg";
import carbonara from "../resources/menu/carbonara.jpg";
import deMare from "../resources/menu/deMare.jpg";
import margarita from "../resources/menu/margarita.jpg";
import proshutto from "../resources/menu/proshutto.jpg";
import speciale from "../resources/menu/speciale.jpg";
import capuccino from "../resources/menu/capuccino.jpg";
import espresso from "../resources/menu/espresso.jpg";
import americano from "../resources/menu/americano.jpg";
import latte from "../resources/menu/latte.jpg";
import sale from "../resources/menu/sale.png";

import OrderItem from "./models/OrderItem.mjs";

export const cartItems = [new OrderItem(1, "", "Paperoni", 20, 1, 20, "M")];

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
    true
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
    false
  ),
  new MenuItem(
    6,
    speciale,
    "Speciale",
    "Bacon, smoked chicken, champignons, cherry tomatoes, mozzarella cheese, cream sauce, barbecue sauce, fried onions",
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
    "super",
    ["S", "M", "L"],
    [
      { size: "S", price: 2 },
      { size: "M", price: 3 },
      { size: "L", price: 4 },
    ],
    true
  ),
  new MenuItem(
    8,
    latte,
    "Latte",
    "super",
    ["S", "M", "L"],
    [
      { size: "S", price: 2 },
      { size: "M", price: 3 },
      { size: "L", price: 4 },
    ],
    true
  ),
  new MenuItem(
    9,
    espresso,
    "Espresso",
    "strong",
    ["S", "M", "L"],
    [
      { size: "S", price: 2 },
      { size: "M", price: 3 },
      { size: "L", price: 4 },
    ],
    true
  ),
  new MenuItem(
    10,
    americano,
    "Americano",
    "mild",
    ["S", "M", "L"],
    [
      { size: "S", price: 2 },
      { size: "M", price: 3 },
      { size: "L", price: 4 },
    ],
    false
  ),
];

export const promoutions = [
  new MenuItem(
    11,
    sale,
    "Action",
    "10 percent discount when buying 2 Carbonara S",
    null,
    [{ size: "Standart", price: 18 }],
    true
  ),
  new MenuItem(
    12,
    capuccino,
    " Action",
    "Buy 3S Capuccino for 5 euro",
    null,
    [{ size: "Standart", price: 5 }],
    true
  ),
];
