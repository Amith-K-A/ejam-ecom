import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_ADDRESS,
  CLEAR_CART,
} from "../actions/types";

export const cartReducer = (
  state = {
    cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    totalPrice: JSON.parse(localStorage.getItem("totalPrice") || "0"),
    address: JSON.parse(localStorage.getItem("address") || "{}"),
  },
  action: any
) => {
  switch (action.type) {
    case ADD_TO_CART:
    case CLEAR_CART:
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        totalPrice: action.payload.totalPrice,
      };

    case INCREASE_QUANTITY:
    case DECREASE_QUANTITY:
      return { ...state, cartItems: action.payload.cartItems };

    case SET_ADDRESS:
      return { ...state, address: action.payload.address };

    default:
      return state;
  }
};
