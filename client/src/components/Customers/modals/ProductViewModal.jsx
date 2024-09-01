import "./ProductViewModal.css";

import FoodSample from "../../../assets/images/assets/food_15.png";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import ProductImageModal from "./ProductImageModal";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { closeProductViewModal } from "../../../Redux/Features/ProductViewSlice";


const ProductViewModal = () => {
  const content = `
 # 🍔 Classic Hamburger

A **Classic Hamburger** is a juicy and delicious sandwich, perfect for satisfying your hunger. Made with a seasoned beef patty, fresh vegetables, and a soft bun, it's a timeless favorite for burger lovers.

## Ingredients

- **Beef Patty**: 100% ground beef, seasoned with salt and pepper, grilled to perfection.
- **Bun**: Soft, lightly toasted sesame seed bun.
- **Lettuce**: Crisp, fresh green leaf lettuce.
- **Tomato**: Slices of ripe, juicy tomato.
- **Onion**: Thin slices of red onion for a bit of a bite.
- **Pickles**: Tangy dill pickles for extra flavor.
- **Cheese**: Melted American cheese (optional).
- **Condiments**: Ketchup, mustard, and mayonnaise (customizable).

## Nutritional Information

- **Calories**: 350 kcal
- **Protein**: 20g
- **Carbohydrates**: 30g
- **Fat**: 15g

## Customization Options

- **Add-ons**: 
  - Bacon 🥓
  - Extra cheese 🧀
  - Avocado 🥑
  - Jalapeños 🌶️
  
- **Bun Options**:
  - Whole wheat bun 🌾
  - Gluten-free bun 🍞
  - Lettuce wrap 🥬 (low-carb)

## Description

Our Classic Hamburger is a simple yet flavorful choice, featuring a juicy beef patty cooked to your preference, topped with fresh vegetables, and served on a soft sesame bun. Whether you like it plain or with all the fixings, it's a crowd-pleaser that never goes out of style.

**Order now** and enjoy the perfect balance of savory, fresh, and satisfying flavors in every bite!
 `;

  const [singleImage, setSingleImage] = useState(FoodSample);
  const [imageView, showViewImage] = useState(false);

  const handleShowModal = () => {
    showViewImage(!imageView);
  };

  const dispatch = useDispatch();

  const displayProductViewModal = useSelector(
    (state) => state.productView.displayProductViewModal
  );
  const data = useSelector((state) => state.productView.data);

  const handleShowImage = (image) => {
    setSingleImage(image);
    handleShowModal();
  };
  const handleCloseProductViewModal = () => {
    dispatch(closeProductViewModal());
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className={`modal product-view ${
        displayProductViewModal ? "active" : null
      }`}
    >
      <div className="modal-wrapper">
        <button className="close-button" onClick={handleCloseProductViewModal}>
          &times;
        </button>
        <div className="modal-contents-container">
          <p className="small-header">{data?.name || "NO NAME"}</p>
          <div className="row">
            <div className="food-display-images">
              {[...Array(4)].map((_, index) => (
                <div
                  className="img-container"
                  key={index}
                  onClick={() => handleShowImage(FoodSample)}
                >
                  <img src={FoodSample} alt={`Hamburger view ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="food-description">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </div>
          <button className="hero-btn-cart">ADD TO CART</button>
        </div>
      </div>
      {imageView && (
        <ProductImageModal
          imageView={imageView}
          handleShowModal={handleShowModal}
          singleImage={singleImage}
        />
      )}
    </div>
  );
};

export default ProductViewModal;
