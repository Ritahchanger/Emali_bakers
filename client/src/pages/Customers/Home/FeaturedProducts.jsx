import React from "react";
import "./featured_products.css";
import TestingImage from "../../../assets/images/assets/food_1.png";
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
              <img src={TestingImage} alt="" />
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
