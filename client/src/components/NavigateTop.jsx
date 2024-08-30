import UpwardArrow from "../assets/icons/upward-arrow.png";
const NavigateTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="arrow-icon" onClick={scrollToTop}>
      <img src={UpwardArrow} alt="" />
    </div>
  );
};

export default NavigateTop;
