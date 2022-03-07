import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/Shop";
import { HomePage } from "./pages/Homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
