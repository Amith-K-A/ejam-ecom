// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/header/header";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <main>
            <Header />
            <Component {...props} />
          </main>
        </>
      )}
    />
  );
};

export default PrivateRoute;
