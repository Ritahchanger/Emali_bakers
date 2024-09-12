import React, { useEffect } from "react";

import Navbar from "../../../components/Customers/Navbar";

import { Link } from "react-router-dom";

import "./Profile.css";

import Footer from "../../../components/Customers/Footer";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchModal from "../../../components/Customers/modals/SearchModal";

import {
  faUserCircle,
  faBox,
  faInbox,
  faStarHalfAlt,
  faTicketAlt,
  faHeart,
  faStore,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [minorSidebar, setMinorSidebar] = useState(false);

  const handleMinorSidebar = () => {
    setMinorSidebar((previous) => !previous);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile">
        <p className="empty"></p>

        <div className="container">
          <button className="profile-info-btn" onClick={handleMinorSidebar}>
            &#9776;
          </button>
          <div className={`sidebar ${minorSidebar ? "active" : ""}`}>
            <button
              className="profile-info-btn close"
              onClick={handleMinorSidebar}
            >
              &times;
            </button>
            <ul className="main-ul">
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faUserCircle} />{" "}
                  <span>My Shoppie Account</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faBox} /> <span>Orders</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faInbox} /> <span>Inbox</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <span>Pending Reviews</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faTicketAlt} />
                  <span>Vouchers</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faHeart} /> <span>Saved Items</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faStore} />{" "}
                  <span>Followed Sellers</span>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FontAwesomeIcon icon={faHistory} />{" "}
                  <span>Recently Viewed</span>
                </Link>
              </li>
            </ul>
            <ul className="minnor-ul">
              <li>
                <Link to="#">Account Management</Link>
              </li>
              <li>
                <Link to="#">Address Book</Link>
              </li>
              <li>
                <Link to="#">Close Account</Link>
              </li>
            </ul>
          </div>
          <div className="account-details">
            <div className="small-header">Account Overview</div>
            <div className="grid">
              <div className="card">
                <p className="header">ACCOUNT DETAILS</p>
                <div className="profile-footer">
                  <p>Dennis Peter</p>
                  <p>peterdennis573@gmail.com</p>
                </div>
              </div>
              <div className="card">
                <p className="header">ADDRESS BOOK</p>
                <div className="profile-footer">
                  <p>Your default shipping address:</p>
                  <p>No default shipping address available.</p>
                  <p>ADD DEFAULT ADDRESS.</p>
                </div>
              </div>
              <div className="card">
                <p className="header">SHOPPIE STORE CREDIT</p>
                <div className="profile-footer">
                  <p>Shoppie store credit balance: KSH 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchModal />
      <Footer />
    </>
  );
};

export default Profile;
