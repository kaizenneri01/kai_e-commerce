import React from "react";
import "./cartdropdown-styles.scss";
import Custombutton from "../custom-button/Custom-button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
  );
};

export default CartDropdown;
