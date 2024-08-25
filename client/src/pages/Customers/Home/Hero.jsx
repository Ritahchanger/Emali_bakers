import "./Hero.css";
const Hero = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
