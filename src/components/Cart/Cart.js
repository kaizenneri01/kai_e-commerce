import React from "react";
import "./cart-styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const Cart = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default Cart;
