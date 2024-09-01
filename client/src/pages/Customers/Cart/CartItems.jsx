import React from "react";
import TestingFoodImage from "../../../assets/images/assets/food_31.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CartItems = () => {
  return (
    <div className="items">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <td>image</td>
              <td>Details</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={TestingFoodImage} alt="" />
              </td>
              <td>
                <p>Hamburger</p>
                <p>sh.30 000</p>
              </td>
              <td>
                <div className="row">
                  <button>+</button>
                  <input type="text" name="" id="" />
                  <button>-</button>
                </div>
              </td>
              <td>
                <button>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItems;
