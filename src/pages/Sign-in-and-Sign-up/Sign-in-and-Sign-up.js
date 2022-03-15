import React from "react";
import SignIn from "../../components/Sign-in/Sign-in";
import "./Sign-in-and-Sign-up-styles.scss";
import SignUp from "../../components/Signup/Sign-up";

const SignInAndSignUp = () => (
  <div className="Sign-in-and-Sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
