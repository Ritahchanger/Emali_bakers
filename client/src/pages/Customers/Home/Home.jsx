import { Fragment } from "react";
import Navbar from "../../../components/Customers/Navbar";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Testimonials/>
    </Fragment>
  );
};

export default Home;
