import React, { useState, useEffect } from "react";
import UpwardArrow from "../assets/icons/upward-arrow.png";

const NavigateTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="arrow-icon"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <img src={UpwardArrow} alt="Scroll to top" />
        </div>
      )}
    </>
  );
};

export default NavigateTop;
