import "./ProductImageModal.css";

import FoodSample from "../../../assets/images/assets/food_15.png";

const ProductImageModal = () => {
  return (
    <div className="modal product-image">
      <div className="modal-wrapper">
        <div className="modal-contents-container">
          <button className="close-button">&times;</button>
          <div className="img-wrapper">
            <img src={FoodSample} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageModal;
