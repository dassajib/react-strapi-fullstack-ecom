import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://assets.vogue.com/photos/615c6c2b050f333b92c9de6d/3:2/w_3024,h_2016,c_limit/lema-promo.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://i.pinimg.com/originals/44/c7/05/44c705f93b84602df7189ceefb2e7297.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">Men</Link>
          </button>
        </div>
      </div>
      <div className="col col-large">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://i0.wp.com/infomazza.com/wp-content/uploads/2015/07/Children-Eid-Dresses-2015-3.png?ssl=1"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">Kids</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://i.pinimg.com/474x/59/c4/98/59c498154b2a02f9f899ba161c52feb5.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">Kids</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/classic-accessories-1516305397.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">Accesories</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
