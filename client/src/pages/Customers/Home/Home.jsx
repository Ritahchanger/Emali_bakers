import { Fragment } from "react";
import Navbar from "../../../components/Customers/Navbar";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import Footer from "../../../components/Customers/Footer";
import Main from "../Main/Main";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Main />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
