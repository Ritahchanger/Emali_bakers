import React, { useState } from "react";
import TestingFoodImage from "../../../assets/images/assets/food_31.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./CartItems.css";

import { useDispatch } from "react-redux";

import { openProductViewModal } from "../../../Redux/Features/ProductViewSlice";

const CartItems = () => {
  const [quantities, setQuantities] = useState([1, 1, 1, 1, 1, 1, 1]);

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  const dispatch = useDispatch();

  const handleDisplayProductModal = (data) => {
    dispatch(openProductViewModal(data));
  };

  return (
    <div className="items">
      <p className="small-header">SHOPPING ITEMS</p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Details</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {quantities.map((quantity, index) => (
              <tr key={index}>
                <td
                  onClick={() => {
                    handleDisplayProductModal({ name: "Hamburger" });
                  }}
                >
                  <img src={TestingFoodImage} alt="Food" />
                </td>
                <td
                  onClick={() => {
                    handleDisplayProductModal({ name: "Hamburger" });
                  }}
                >
                  <p>Hamburger</p>
                  <p>sh.30 000</p>
                </td>
                <td>
                  <div className="row">
                    <button onClick={() => handleIncrement(index)}>+</button>
                    <input type="text" value={quantity} readOnly />
                    <button onClick={() => handleDecrement(index)}>-</button>
                  </div>
                </td>
                <td>
                  <button className="delete-btn">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
