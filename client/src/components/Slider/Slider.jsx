import React, { useState } from "react";
import "./Slider.scss";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const Slider = () => {
  
  const [currentSlider, setCurrentSlider] = useState(0);

  // when the slider img is num 0 and prevSlider is clicked then img will be 2 no sider img
  const prevSlider = () => {
    setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
  };

  // when img no is num 2 and nextSlide is clicked then img will be num 0
  const nextSlider = () => {
    setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
  };

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        <img src={data[0]} alt="pic" />
        <img src={data[1]} alt="pic" />
        <img src={data[2]} alt="pic" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlider}>
          <WestIcon />
        </div>
        <div className="icon" onClick={nextSlider}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
