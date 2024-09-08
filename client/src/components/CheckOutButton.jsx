import React from "react";
import axios from "axios";
import Config from "../Config";
import { useDispatch, useSelector } from "react-redux";
import { closePreloader, openPreloader } from "../Redux/Features/PreloaderSlice";

const CheckOutButton = ({ cartItems }) => {
  const dispatch = useDispatch();

  // Use the state to determine if the preloader is active
  const displayPreloader = useSelector(
    (state) => state.preloader.displayPreloader
  );

  const handlePayment = async () => {
    try {
      // Open preloader when payment starts
      dispatch(openPreloader());

      // Post request to create a Stripe checkout session
      const response = await axios.post(
        `${Config.backendUrl}/api/payment/stripe/create-checkout-session`,
        {
          cartItems,
          userId: 325764382, // Assuming static userId for now
        }
      );

      // If successful, redirect to the Stripe session
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
    } finally {
      // Close preloader in both success and error cases
      dispatch(closePreloader());
    }
  };

  return (
    <button
      className="main-button"
      onClick={handlePayment}
      disabled={displayPreloader} // Disable button while loading
    >
      {displayPreloader ? "Processing..." : "PROCEED TO CHECKOUT"}
    </button>
  );
};

export default CheckOutButton;
