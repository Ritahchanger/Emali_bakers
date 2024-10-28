import React from "react";

import SafaricomPayment from "../../pages/Customers/Checkout/SafaricomPayment";

import BankPayment from "../../pages/Customers/Checkout/BankPayment";

import "./PaymentCheckout.css";
const PaymentCheckout = ({ handleSetPaymentMethod, paymentMethod }) => {
  return (
    <div className="payment-checkout">
      <p className="subtitle">CHECK PAYMENT METHOD?</p>

      <div className="row button">
        <button
          className="payment-buttons"
          onClick={() => {
            handleSetPaymentMethod("safaricom");
          }}
        >
          Safaricom
        </button>
        <button
          className="payment-buttons"
          onClick={() => {
            handleSetPaymentMethod("card");
          }}
        >
          Bank Card
        </button>
      </div>
      <p className="subtitle">{paymentMethod.toUpperCase()}</p>

      {paymentMethod.toLowerCase() === "safaricom" ? (
        <SafaricomPayment />
      ) : (
        <BankPayment />
      )}
    </div>
  );
};

export default PaymentCheckout;
