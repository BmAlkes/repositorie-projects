/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useState,
  useReducer,
  useEffect,
  useContext,
} from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import cartItems from "./data";
import { getTotals } from "./utils";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const CartContext = createContext();

export const useGlobalContext = () => {
  return useContext(CartContext);
};

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};
console.log(initialState.cart);

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const deleteItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        deleteItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
