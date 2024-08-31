import React from "react";
import "./featured_products.css";
import { Link } from "react-router-dom";

import TestingImage1 from "../../../assets/images/assets/food_1.png";
import TestingImage2 from "../../../assets/images/assets/food_2.png";
import TestingImage3 from "../../../assets/images/assets/food_3.png";
import TestingImage4 from "../../../assets/images/assets/food_4.png";
import TestingImage5 from "../../../assets/images/assets/food_5.png";
import TestingImage6 from "../../../assets/images/assets/food_6.png";
import TestingImage7 from "../../../assets/images/assets/food_7.png";
import TestingImage8 from "../../../assets/images/assets/food_8.png";

import { openProductViewModal } from "../../../Redux/Features/ProductViewSlice";

import { useSelector, useDispatch } from "react-redux";

import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";

const products = [
  { id: 1, name: "Hamburger", price: "$3.23", image: TestingImage1 },
  { id: 2, name: "Cheeseburger", price: "$4.23", image: TestingImage2 },
  { id: 3, name: "Chicken Sandwich", price: "$5.23", image: TestingImage3 },
  { id: 4, name: "Veggie Burger", price: "$3.53", image: TestingImage4 },
  { id: 5, name: "Fish Sandwich", price: "$4.53", image: TestingImage5 },
  { id: 6, name: "Bacon Burger", price: "$6.23", image: TestingImage6 },
  { id: 7, name: "Mushroom Burger", price: "$5.73", image: TestingImage7 },
  { id: 8, name: "Spicy Burger", price: "$4.73", image: TestingImage8 },
];

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  const handleDisplayProductModal = (data) => {
    dispatch(openProductViewModal(data));
  };

  return (
    <div className="featured_products">
      <div className="container">
        <p className="small-header">Products</p>
        <p className="medium-header">Featured</p>
        <div className="products-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="img-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-body">
                <p className="food-name">{product.name}</p>
                <p className="price">{product.price}</p>
                <Link
                  to="#"
                  onClick={() => {
                    handleDisplayProductModal(product);
                  }}
                >
                  <button>view</button>
                </Link>
                {/* <Link to={`/account/product/${product.id}`}>
                  <button>view</button>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductViewModal />
    </div>
  );
};

export default FeaturedProducts;
