import { Fragment } from "react";
import Navbar from "../../../components/Customers/Navbar";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <FeaturedProducts />
    </Fragment>
  );
};

export default Home;
