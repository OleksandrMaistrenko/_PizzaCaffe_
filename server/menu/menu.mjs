import MenuItem from "./models/MenuItem.mjs";

import OrderItem from "./models/OrderItem.mjs";

export const cartItems = [new OrderItem(1, "", "Paperoni", 20, 1, 20, "M")];

export const pizzas = [
  new MenuItem(
    1,
    "",
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
    "",
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
    "",
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
    "",
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
    "",
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
    "",
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
    "",
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
    "",
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
    "",
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
    "",
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

//акции
export const promoutions = [
  new MenuItem(
    11,
    "",
    "Action",
    "10 percent discount when buying 2 Carbonara S",
    null,
    [{ size: "Standart", price: 18 }],
    true
  ),
  new MenuItem(
    12,
    "",
    " Action",
    "Buy 3S Capuccino for 5 euro",
    null,
    [{ size: "Standart", price: 5 }],
    true
  ),
];
