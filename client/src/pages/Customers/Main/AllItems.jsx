import ItemI from "../../../assets/images/assets/food_20.png";
import Item2 from "../../../assets/images/assets/food_19.png";
import Item3 from "../../../assets/images/assets/food_18.png";
import Item4 from "../../../assets/images/assets/food_17.png";
import Item5 from "../../../assets/images/assets/food_16.png";
import Item6 from "../../../assets/images/assets/food_15.png";
import Item7 from "../../../assets/images/assets/food_14.png";
import Item8 from "../../../assets/images/assets/food_13.png";
import "./AllItems.css";
import { Link } from "react-router-dom";
const AllItems = () => {
  return (
    <div className="all-items">
      <div className="row">
        <p className="small-header">All Items</p>
        <div className="filter-container">
          <p className="small-header">Filter</p>
          <select name="filter" id="">
            <option value="">Filter by</option>
            <option value="">Name</option>
            <option value="">Date</option>
            <option value="">Price</option>
            <option value="">Delicacies</option>
          </select>
        </div>
      </div>
      <div className="grid">
        <div className="card">
          <div className="img-wrapper">
            <img src={ItemI} alt="" />
          </div>
          <div className="card-body">
            <p className="food-name">Hamburger</p>
            <p className="price">$3.23</p>
            <Link to="/account/product/1">
              <button>view</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src={Item2} alt="" />
          </div>
          <div className="card-body">
            <p className="food-name">Hamburger</p>
            <p className="price">$3.23</p>
            <Link to="/account/product/1">
              <button>view</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src={Item3} alt="" />
          </div>
          <div className="card-body">
            <p className="food-name">Hamburger</p>
            <p className="price">$3.23</p>
            <Link to="/account/product/1">
              <button>view</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src={Item4} alt="" />
          </div>
          <div className="card-body">
            <p className="food-name">Hamburger</p>
            <p className="price">$3.23</p>
            <Link to="/account/product/1">
              <button>view</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src={Item5} alt="" />
          </div>
          <div className="card-body">
            <p className="food-name">Hamburger</p>
            <p className="price">$3.23</p>
            <Link to="/account/product/1">
              <button>view</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src={Item6} alt="" />
          </div>
          <div className="card-body">
            <p className="food-name">Hamburger</p>
            <p className="price">$3.23</p>
            <Link to="/account/product/1">
              <button>view</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src={Item7} alt="" />
          </div>
          <div className="card-body">
            <p className="food-name">Hamburger</p>
            <p className="price">$3.23</p>
            <Link to="/account/product/1">
              <button>view</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="img-wrapper">
            <img src={Item8} alt="" />
          </div>
          <div className="card-body">
            <p className="food-name">Hamburger</p>
            <p className="price">$3.23</p>
            <Link to="/account/product/1">
              <button>view</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
