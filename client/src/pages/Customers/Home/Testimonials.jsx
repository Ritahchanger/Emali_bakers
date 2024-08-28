import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialImage from "../../../assets/images/assets/menu_1.png";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      name: "Ken Anelka",
      role: "CEO Supa Loaf",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam beatae sit ut dolore quam? Vitae beatae maxime sint qui. Tenetur molestias consectetur quas laudantium velit similique ut.",
      image: TestimonialImage,
    },
    // Add more testimonials here
  ];

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
                    <p>{testimonial.role}</p>
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
