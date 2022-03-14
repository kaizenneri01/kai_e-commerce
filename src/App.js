import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/Shop";
import { HomePage } from "./pages/Homepage";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase-util";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
