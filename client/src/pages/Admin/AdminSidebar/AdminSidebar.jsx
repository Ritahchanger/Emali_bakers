import "./AdminSidebar.css";
import { MdDashboard } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { FaBoxOpen } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { FaBell } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { useSelector } from "react-redux";
const AdminSidebar = () => {
  const isSidebarOpen = useSelector(
    (state) => state.adminSidebar.displaySidebar
  );

  return (
    <div className={`admin sidebar ${isSidebarOpen ? "active" : ""}`}>
      <div className="sidebar-content">
        <ul>
          <li>
            <Link to="/admin/dashboard">
              <span>
                <MdDashboard />
              </span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <span>
                <ImUsers />
              </span>
              Manage Users
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              <span>
                <FaBoxOpen />
              </span>
              Manage Products
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              <span>
                <FaBoxOpen />
              </span>
              Manage Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/deliveries">
              <span>
                <FaBoxOpen />
              </span>
              Manage Deliveries
            </Link>
          </li>
          <li>
            <Link to="/admin/payments">
              <span>
                <FaBitcoin />
              </span>
              Manage Payments
            </Link>
          </li>
          <li>
            <Link to="/admin/reports">
              <span>
                <LuFiles />
              </span>
              Reports
            </Link>
          </li>
          <li>
            <Link to="/admin/notification">
              <span>
                <FaBell />
              </span>
              Notifications
            </Link>
          </li>
          <li>
            <Link to="/admin/deliveries">
              <span>
                <FaGear />
              </span>
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
