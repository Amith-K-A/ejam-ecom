import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SET_ADDRESS,
} from "./types";

export const addToCart = (product: any) => (dispatch: any, getState: any) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x: any) => {
    if (x.id === product.id) {
      alreadyExists = true;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product });
  }
  const totalPrice = getTotalPrice(cartItems);

  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems, totalPrice },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};

export const removeFromCart =
  (product: any) => (dispatch: any, getState: any) => {
    const cartItems = getState()
      .cart.cartItems.slice()
      .filter((x: any) => x.id !== product.id);
    const totalPrice = getTotalPrice(cartItems);
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems, totalPrice } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  };

export const clearCart = () => (dispatch: any) => {
  const cartItems: never[] = [];
  const totalPrice = getTotalPrice(cartItems);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
};

export const incrementToCart =
  (product: any) => (dispatch: any, getState: any) => {
    const cartItems = getState().cart.cartItems.slice();
    const selectProduct = cartItems.find(
      (item: { id: any }) => item.id === product.id
    );
    const index = cartItems.indexOf(selectProduct);
    const value = cartItems[index];
    value.qty = value.qty + 1;
    value.total = value.qty * value.netPrice;

    dispatch({
      type: INCREASE_QUANTITY,
      payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const decreaseToCart =
  (product: any) => (dispatch: any, getState: any) => {
    const cartItems = getState().cart.cartItems.slice();
    const selectProduct = cartItems.find(
      (item: { id: any }) => item.id === product.id
    );
    const index = cartItems.indexOf(selectProduct);
    const value = cartItems[index];
    if (value.qty > 1) {
      value.qty = value.qty - 1;
      value.total = value.qty * value.netPrice;
    }
    dispatch({ type: DECREASE_QUANTITY, payload: { cartItems } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

const getTotalPrice = (cartItems: any) => {
  const totalPrice = cartItems
    ?.slice()
    .reduce(
      (accumulator: any, item: any) =>
        accumulator + item.qty * (item.price + item.shippingPrice),
      0
    );
  return totalPrice.toFixed(2);
};

export const setAddress = (address: any) => (dispatch: any, getState: any) => {
  dispatch({
    type: SET_ADDRESS,
    payload: { address },
  });
  localStorage.setItem("address", JSON.stringify(address));
};
