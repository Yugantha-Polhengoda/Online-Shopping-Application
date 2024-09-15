import { createContext, useState } from "react";
import { products } from "../components/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size, color, quantity = 1) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    // Check if the itemId exists in the cart
    if (!cartData[itemId]) {
      // If it doesn't exist, initialize it as an empty object
      cartData[itemId] = {};
    }

    // Check if the size exists for the itemId
    if (!cartData[itemId][size]) {
      // If it doesn't exist, initialize it as an empty object
      cartData[itemId][size] = {};
    }

    // Check if the color exists for the itemId and size
    if (cartData[itemId][size][color]) {
      // If it does exist, increment the quantity
      cartData[itemId][size][color] += quantity;
    } else {
      // If it doesn't exist, set it to the quantity provided
      cartData[itemId][size][color] = quantity;
    }

    // Update the state with the new cart data
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    // Loop through all items in the cart
    for (const itemId in cartItems) {
      // Loop through all sizes for a specific item
      for (const size in cartItems[itemId]) {
        // Loop through all colors for a specific size
        for (const color in cartItems[itemId][size]) {
          // Accumulate the quantity for each color
          totalCount += cartItems[itemId][size][color];
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, color, newQuantity) => {
    let cartData = structuredClone(cartItems);

    // Check if item exists in the cart
    if (
      cartData[itemId] &&
      cartData[itemId][size] &&
      cartData[itemId][size][color]
    ) {
      if (newQuantity > 0) {
        // Update the quantity if it's greater than 0
        cartData[itemId][size][color] = newQuantity;
      } else {
        // If quantity is 0 or less, remove the color
        delete cartData[itemId][size][color];

        // If no more colors in this size, remove the size
        if (Object.keys(cartData[itemId][size]).length === 0) {
          delete cartData[itemId][size];
        }

        // If no more sizes for this item, remove the item
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    }

    // Update the state with the modified cart data
    setCartItems(cartData);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
