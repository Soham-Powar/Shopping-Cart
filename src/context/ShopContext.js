import { createContext } from "react";

export const ShopContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decreaseQuantity: () => {},
});
