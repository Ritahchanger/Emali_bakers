import { Fragment } from "react";
import Navbar from "../../../components/Customers/Navbar";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import Footer from "../../../components/Customers/Footer";
import Main from "../Main/Main";
import NavigateTop from "../../../components/NavigateTop";
import ProductViewModal from "../../../components/Customers/modals/ProductViewModal";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Main />
      <Testimonials />
      <NavigateTop />
      <ProductViewModal />
      <Footer />
    </div>
  );
};

export default Home;
