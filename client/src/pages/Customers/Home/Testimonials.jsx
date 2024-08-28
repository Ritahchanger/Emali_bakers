import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonials } from "../../../Data/ProductsData";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="testimonials">
      <div className="container">
        <p className="small-header">Testimonials</p>
        <div className="medium-header">What customers say</div>
        <div className="testimonials-grid">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <div className="img-wrapper">
                    <img src={testimonial.image} alt={`${testimonial.name}`} />
                  </div>
                  <div className="row">
                    <p className="name">{testimonial.name}</p>
                    <p className="role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-body">
                  <p className="description">{testimonial.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
