import React from "react";
import SHOP_DATA from "./Shop-Data";
import PreviewCollection from "../../components/preview-collection/Preview-collection";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
