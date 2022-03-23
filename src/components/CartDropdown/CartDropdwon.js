import React from "react";
import { connect } from "react-redux";
import "./cartdropdown-styles.scss";
import Custombutton from "../custom-button/Custom-button";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
