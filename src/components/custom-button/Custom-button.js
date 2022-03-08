import React from "react";
import "./custom-button-styles.scss";

export const Custombutton = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default Custombutton;
