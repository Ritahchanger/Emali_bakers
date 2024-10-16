import { FaUser } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import "./AdminNavbar.css";
const AdminNavbar = () => {
  return (
    <>
      <div className=" admin navbar">
        <div className="left-container">
          <div className="logo">
            <a href="#">
              Adm<span>in</span>
            </a>
          </div>
        </div>
        <div className="right-container">
          <div className="profile-container">
            <button>
              <span>
                <FaUser />
              </span>
            </button>
            <button className="dropdown-arrow">
              <span>
                <IoIosArrowDropdownCircle />
              </span>
            </button>
            <div className="drop-down">
              <ul>
                <li>
                  <a href="#">Logout</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Logout</a>
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
