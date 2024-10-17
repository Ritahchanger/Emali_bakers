import { FaUser } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleSidebar } from "../../../Redux/Features/AdminSidebarSlice";

import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const AdminNavbar = () => {
  const dispatch = useDispatch();

  const handleDisplaySidebar = () => {
    dispatch(toggleSidebar());
  };

  const isSidebarOpen = useSelector(
    (state) => state.adminSidebar.displaySidebar
  );

  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <>
      <div className=" admin navbar">
        <div className="left-container">
          <div className="logo">
            <a href="#">
              Adm<span>in</span>
            </a>
            {!isSidebarOpen ? (
              <button className="menu-icon" onClick={handleDisplaySidebar}>
                <span>&#9776;</span>
              </button>
            ) : (
              <button className="menu-icon" onClick={handleDisplaySidebar}>
                <span>&times;</span>
              </button>
            )}
          </div>
        </div>
        <div className="input-search">
          <input type="text" placeholder="Enter your search..." />
          <button>
            <span>
              <IoSearch />
            </span>
          </button>
        </div>
        <div className="right-container">
          <div className="profile-container">
            <button>
              <span>
                <FaUser />
              </span>
            </button>
            <button
              className={`dropdown-arrow ${dropdown ? "active" : ""}`}
              onClick={handleDropdown}
  
            >
              <span>
                <IoIosArrowDropdownCircle />
              </span>
            </button>
            <div className={`drop-down ${dropdown ? "active" : ""}`}>
              <ul>
                <li>
                  <Link to="#">Profile</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          paddingTop: "50px",
        }}
      ></p>
    </>
  );
};

export default AdminNavbar;
