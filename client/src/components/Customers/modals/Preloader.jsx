import React from "react";
import "./Preloader.css"; // Import the CSS file for styling

import { useSelector } from "react-redux";

const Preloader = () => {
  const displayPreloader = useSelector(
    (state) => state.preloader.displayPreloader
  );

  return (
    <div
      className={`preloader-container ${displayPreloader ? "active" : null}`}
    >
      <div className="spinner"></div>
      <p style={{

        color:"#fff"
      }}>Loading...</p>
    </div>
  );
};

export default Preloader;
