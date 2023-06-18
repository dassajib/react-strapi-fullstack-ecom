import React, { useState } from "react";
import "./Navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart/Cart";

const Navbar = () => {

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* navbar left side */}
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="picture" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>

        {/* navbar center logo */}
        <div className="center">
          <Link className="link" to="/">Shopify</Link>
        </div>

        {/* navbar right side */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>
          
          {/* right side icons */}
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className="cart-icon"onClick={() => setCartOpen(!cartOpen)} >
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {
        cartOpen && <Cart />
      }
    </div>
  );
};

export default Navbar;
