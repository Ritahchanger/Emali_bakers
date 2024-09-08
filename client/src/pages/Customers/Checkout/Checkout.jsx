import Navbar from "../../../components/Customers/Navbar";
import Footer from "../../../components/Customers/Footer";

import { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }, []);

  return (
    <div className="check-out">
      <Navbar />
      <p className="empty">LOREM</p>
      <Footer />
    </div>
  );
};

export default Checkout;
