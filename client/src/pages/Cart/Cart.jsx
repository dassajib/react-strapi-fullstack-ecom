import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://w0.peakpx.com/wallpaper/884/434/HD-wallpaper-emma-stone-hoot-american-actress-beautiful-dress-american-star-popular-actress.jpg",
      img2: "https://newsimages.fashionmodeldirectory.com/content/2018/01/MAY-2015-GUESS-S1-Copy.jpg",
      title: "Dress One",
      desc: "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
      isNew: true,
      oldPrice: 19,
      newPrice: 14,
    },
    {
      id: 2,
      img: "https://www.thegoodtrade.com/wp-content/uploads/2023/01/american-made-clothing.jpg",
      title: "Dress Two",
      desc: "description 2",
      isNew: true,
      oldPrice: 29,
      newPrice: 24,
    },
  ];

  return (
    <div className="cart">
      <h1>Product in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 30)}</p>
            <div className="price">
              <p>{item.newPrice}</p>
            </div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SubTotal</span>
        <span>$123</span>
      </div>
      <button>Proceed to checkout</button>
      <span className="reset">Reset</span>
    </div>
  );
};

export default Cart;
