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

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }

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
          <div className="buttons">
            <Custombutton type="sbmit"> Sign in</Custombutton>
            <Custombutton onClick={this.handleLogIn} isGoogleSignIn>
              sign in with Google
            </Custombutton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
