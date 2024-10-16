import React from "react";
import FoodImage from "../../assets/images/assets/food_16.png";
import { Link } from "react-router-dom";
import { openProductViewModal } from "../../Redux/Features/ProductViewSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = () => {
  const dispatch = useDispatch();
  const handleDisplayProductModal = (data) => {
    dispatch(openProductViewModal(data));
  };
  return (
    <div className="card" key="djasjd">
      <div className="img-wrapper">
        <img src={FoodImage} alt={"Hamburger"} />
      </div>
      <div className="card-body">
        <p className="food-name">{`Hamburger`}</p>
        <p className="price">{`sh.1200`}</p>
        <Link
          to="#"
          onClick={() => {
            handleDisplayProductModal({ name: "Hamburger" });
          }}
        >
          <button>view</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
