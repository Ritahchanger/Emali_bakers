import { Fragment, useEffect } from "react";
import Navbar from "../../../components/Customers/Navbar";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import Footer from "../../../components/Customers/Footer";
import Main from "../Main/Main";
import NavigateTop from "../../../components/NavigateTop";
import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";
import SearchModal from "../../../components/Customers/modals/SearchModal";
import Preloader from "../../../components/Customers/modals/Preloader";
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Main />
      <Testimonials />
      <NavigateTop />
      <ProductViewModal />
      <SearchModal />
      <Preloader />
      <Footer />
    </div>
  );
};

export default Home;
