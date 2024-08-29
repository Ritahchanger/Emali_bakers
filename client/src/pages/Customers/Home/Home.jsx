import { Fragment } from "react";
import Navbar from "../../../components/Customers/Navbar";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import Footer from "../../../components/Customers/Footer";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
