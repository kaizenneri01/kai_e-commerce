import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/Shop";
import { HomePage } from "./pages/Homepage";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
