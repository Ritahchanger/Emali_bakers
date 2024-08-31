import "./ProductViewModal.css";

import FoodSample from "../../../assets/images/assets/food_15.png";

import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";

import ProductImageModal from "./ProductImageModal";

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

  return (
    <div className="modal product-view">
      <div className="modal-wrapper">
        <button className="close-button">&times;</button>
        <div className="modal-contents-container">
          <p className="small-header">HAMBURGER</p>
          <div className="row">
            <div className="food-display-images">
              <div className="img-container">
                <img src={FoodSample} alt="" />
              </div>
              <div className="img-container">
                <img src={FoodSample} alt="" />
              </div>
              <div className="img-container">
                <img src={FoodSample} alt="" />
              </div>
              <div className="img-container">
                <img src={FoodSample} alt="" />
              </div>
            </div>
            <div className="food-description">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <ProductImageModal />
    </div>
  );
};

export default ProductViewModal;
