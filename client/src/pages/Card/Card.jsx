import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
            {
                item.isNew && <span>New Season</span>
            }
          <img src={item.img} className="mainImg" alt="" />
          <img src={item.img2} className="secondImg" alt="" />
        </div>
        <h2>{item.title}</h2>
        <div className="priceSection">
          <h3 className="price">${item.oldPrice}</h3>
          <h3 className="price">${item.newPrice}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
