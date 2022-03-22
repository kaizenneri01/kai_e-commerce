import React from "react";
import { connect } from "react-redux";
import "./collection-item-style.scss";
import Custombutton from "../custom-button/Custom-button";
import { addItem } from "../../redux/cart/CardAction";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Custombutton onClick={() => addItem(item)}> Add to cart</Custombutton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
