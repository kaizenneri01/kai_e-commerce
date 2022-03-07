import React from "react";
import CollectionItem from "../collection-item/Collection-item";
import "./preview-collection-styles.scss";

export const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
