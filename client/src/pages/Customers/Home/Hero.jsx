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
const featuredAnimationsData = [
  {
    img: Food1,
    price: 2.5,
    name: "Hamburger",
  },
  {
    img: Food2,
    price: 2.7,
    name: "Hamburger",
  },
  {
    img: Food3,
    price: 3.0,
    name: "Hamburger",
  },
  {
    img: Food4,
    price: 3.1,
    name: "Hamburger",
  },
  {
    img: Food5,
    price: 3.2,
    name: "Hamburger",
  },
  {
    img: Food6,
    price: 2.3,
    name: "Hamburger",
  },
  {
    img: Food7,
    price: 2.5,
    name: "Hamburger",
  },
  {
    img: Food8,
    price: 2.9,
    name: "Hamburger",
  },
];
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
        breakpoint: 600,
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            modi tenetur saepe nihil blanditiis aspernatur.
            <br />
            Quam tenetur consequuntur corrupti quae cumque magnam earum dolorum
            neque.
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
                    <p>{item.price}</p>
                    <p>{item.name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
