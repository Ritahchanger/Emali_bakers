import Navbar from "../../../components/Customers/Navbar";
import Footer from "../../../components/Customers/Footer";

import { useEffect, useState } from "react";
import CustomerInformationCheckout from "../../../components/Customers/CustomerInformationCheckout";

import "./Checkout.css";
import PaymentCheckout from "../../../components/Customers/PaymentCheckout";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("safaricom");

  const handleSetPaymentMethod = (howToPay) => {
    setPaymentMethod(howToPay);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className="check-out"
      style={{
        background: "#FFF",
      }}
    >
      <Navbar />
      <div className="container checkout">
        <div className="customer-information">
          <CustomerInformationCheckout />
        </div>
        <div className="customer-information">
          <PaymentCheckout
            handleSetPaymentMethod={handleSetPaymentMethod}
            paymentMethod={paymentMethod}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
