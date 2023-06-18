import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const Product = () => {
  const [selectedImg, setSelectImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const imgData = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    "https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={imgData[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={imgData[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={imgData[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">100$</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolore
          sequi sunt recusandae. Odio quidem, dignissimos praesentium quis qui
          unde.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> Add To Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> Add To WishList
          </div>
          <div className="item">
            <CompareArrowsIcon /> Add To Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag : T-Tshirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>Description:</span>
          <hr />
          <span>Additinal Information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
