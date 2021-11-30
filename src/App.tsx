import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import PrivateRoute from "./utility/private-router";
import PlaceOrder from "./pages/place-order/place-order";
import OrderSuccess from "./pages/order-confirm/order-confirm";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
          <PrivateRoute exact path="/place-order" component={PlaceOrder} />
          <PrivateRoute exact path="/confirm/:id" component={OrderSuccess} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
