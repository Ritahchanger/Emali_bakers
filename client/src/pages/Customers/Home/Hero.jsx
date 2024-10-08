import "./Hero.css";
import Food1 from "../../../assets/images/assets/food_1.png";
import Food2 from "../../../assets/images/assets/food_2.png";
import Food3 from "../../../assets/images/assets/food_3.png";
import Food4 from "../../../assets/images/assets/food_4.png";
import Food5 from "../../../assets/images/assets/food_5.png";
import Food6 from "../../../assets/images/assets/food_6.png";
import Food7 from "../../../assets/images/assets/food_7.png";
import Food8 from "../../../assets/images/assets/food_8.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaCartPlus } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";
import { useDispatch } from "react-redux";
import { openProductViewModal } from "../../../Redux/Features/ProductViewSlice";
const featuredAnimationsData = [
  {
    img: Food1,
    price: 2.5,
    name: "Cheeseburger",
  },
  {
    img: Food2,
    price: 2.7,
    name: "Veggie Burger",
  },
  {
    img: Food3,
    price: 3.0,
    name: "Chicken Sandwich",
  },
  {
    img: Food4,
    price: 3.1,
    name: "BBQ Burger",
  },
  {
    img: Food5,
    price: 3.2,
    name: "Fish Taco",
  },
  {
    img: Food6,
    price: 2.3,
    name: "Turkey Burger",
  },
  {
    img: Food7,
    price: 2.5,
    name: "Grilled Cheese",
  },
  {
    img: Food8,
    price: 2.9,
    name: "Bacon Cheeseburger",
  },
];

const Hero = () => {
  const dispatch = useDispatch();

  const handleDisplayProductModal = (data) => {
    dispatch(openProductViewModal(data));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 558,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1 className="large-header">
            Freshly Baked Delights
            <br />
            Delivered to Your Doorsteps
          </h1>
          <p className="mobile">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Quam tenetur
            consequuntur corrupti quae cumque magnam earum dolorum neque.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn">Order Now</button>
            <button className="hero-btn">Browse Menu</button>
          </div>
          <div className="featured-animations">
            <Slider {...settings}>
              {featuredAnimationsData.map((item, index) => (
                <div className="animated-card" key={index}>
                  <div className="img-wrapper">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="details">
                    <p>${item.price}</p>
                    <p>{item.name}</p>
                    <div className="btns">
                      <button className="cart-btn">
                        <FaCartPlus />
                      </button>
                      <button
                        className="cart-btn"
                        onClick={() => {
                          handleDisplayProductModal({
                            name: item.name,
                          });
                        }}
                      >
                        <BiShow />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <ProductViewModal />
    </div>
  );
};

export default Hero;
