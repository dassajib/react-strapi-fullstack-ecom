import React, { useState } from "react";
import "./Products.scss";
import List from "../List/List";
import { useParams } from "react-router-dom";

const Products = () => {

  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)

  return (
    <div className="products">
      <div className="left">
        <div className="item">
          <h1>Product Categories</h1>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" value={3} />
            <label htmlFor="3">Pants</label>
          </div>
        </div>
        <div className="item">
          <h1>Filter By Price</h1>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="item">
          <h1>Sort By</h1>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
            <label htmlFor="asc">Price (Lowest to Highest)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest to Lowest)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="categoryImg"
          src="https://wallpaperaccess.com/full/1437631.jpg"
          alt=""
        />
        <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
