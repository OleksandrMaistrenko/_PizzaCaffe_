const cartData = {
  //тут мои закази в корзине обьект
};

const saveCartToLocalStorage = (cartData) => {
  localStorage.setItem("cart", JSON.stringify(cartData));
};

//чтоб вівести надо назад ропарсить наш обьект через утсановлений ключ

const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  return cartData ? JSON.parse(cartData) : [];
};

const initialState = loadCartFromLocalStorage();

const [cartItems, setCartItems] = useState(initialState);

useEffect(() => {
  saveCartToLocalStorage(cartItems);
}, [cartItems]);
