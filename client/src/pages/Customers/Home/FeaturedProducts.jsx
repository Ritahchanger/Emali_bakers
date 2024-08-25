import React from "react";
import "./featured_products.css";
import TestingImage from "../../../assets/images/assets/food_1.png";
import TestingImage2 from "../../../assets/images/assets/food_2.png";
import TestingImage3 from "../../../assets/images/assets/food_3.png";
import TestingImage4 from "../../../assets/images/assets/food_4.png";
import TestingImage5 from "../../../assets/images/assets/food_5.png";
import TestingImage6 from "../../../assets/images/assets/food_6.png";
import TestingImage7 from "../../../assets/images/assets/food_7.png";
import TestingImage8 from "../../../assets/images/assets/food_8.png";
const FeaturedProducts = () => {
  return (
    <div className="featured_products">
      <div className="container">
        <h2 className="medium-header">FEATURED PRODUCTS</h2>
        <div className="products-grid">
          <div className="card">
            <div className="img-wrapper">
              <img src={TestingImage} alt="" />
            </div>
            <div className="card-body">
              <p className="food-name">Hamburger</p>
              <p className="price">$3.23</p>
              <button>view</button>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={TestingImage2} alt="" />
            </div>
            <div className="card-body">
              <p className="food-name">Hamburger</p>
              <p className="price">$3.23</p>
              <button>view</button>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={TestingImage3} alt="" />
            </div>
            <div className="card-body">
              <p className="food-name">Hamburger</p>
              <p className="price">$3.23</p>
              <button>view</button>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={TestingImage4} alt="" />
            </div>
            <div className="card-body">
              <p className="food-name">Hamburger</p>
              <p className="price">$3.23</p>
              <button>view</button>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={TestingImage5} alt="" />
            </div>
            <div className="card-body">
              <p className="food-name">Hamburger</p>
              <p className="price">$3.23</p>
              <button>view</button>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={TestingImage6} alt="" />
            </div>
            <div className="card-body">
              <p className="food-name">Hamburger</p>
              <p className="price">$3.23</p>
              <button>view</button>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={TestingImage7} alt="" />
            </div>
            <div className="card-body">
              <p className="food-name">Hamburger</p>
              <p className="price">$3.23</p>
              <button>view</button>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={TestingImage8} alt="" />
            </div>
            <div className="card-body">
              <p className="food-name">Hamburger</p>
              <p className="price">$3.23</p>
              <button>view</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
