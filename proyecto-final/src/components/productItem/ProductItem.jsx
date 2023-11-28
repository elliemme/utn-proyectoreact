import React from "react";
import "./productItem.css";

function ProductItem({ img, title }) {
  return (
    <div>
      <div>
        <img className="img-menu" src={img} alt="" />
      </div>
      <div className="productGrid">
        <p className="product__name">{title}</p>
      </div>
    </div>
  );
}

export default ProductItem;
