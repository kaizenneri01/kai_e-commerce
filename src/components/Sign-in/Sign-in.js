import React, { Component } from "react";
import "./sign-in-styles.scss";
import FormInput from "../form-input/Form-input";
import Custombutton from "../custom-button/Custom-button";
import { provider, auth } from "../../firebase/firebase-util";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleLogIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <Custombutton type="sbmit"> Sign in</Custombutton>
          <Custombutton onClick={this.handleLogIn}>
            sign in with Google
          </Custombutton>
        </form>
      </div>
    );
  }
}

export default SignIn;
