import AllItemImage from "../../../assets/images/assets/food_20.png";
import "./AllItems.css"
import { Link } from "react-router-dom";
const AllItems = () => {
  return (
    <div className="all-items">
      <div className="row">
        <p className="small-header">All items</p>
        <p className="small-header">Filter</p>
      </div>
      <div className="grid">
        <div className="card">
          <div className="img-wrapper">
            <img src={AllItemImage} alt="" />
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
            <img src={AllItemImage} alt="" />
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
            <img src={AllItemImage} alt="" />
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
            <img src={AllItemImage} alt="" />
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
            <img src={AllItemImage} alt="" />
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
            <img src={AllItemImage} alt="" />
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
            <img src={AllItemImage} alt="" />
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
            <img src={AllItemImage} alt="" />
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
