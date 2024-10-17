import "./AdminSidebar.css";
import { MdDashboard } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { FaBoxOpen, FaBell, FaBitcoin } from "react-icons/fa";
import { LuFiles } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { useSelector } from "react-redux";

import { closeOpenSidebar } from "../../../Redux/Features/AdminSidebarSlice";

import { useDispatch } from "react-redux";

const AdminSidebar = () => {
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(
    (state) => state.adminSidebar.displaySidebar
  );

  const hideSidebar = () => {
    dispatch(closeOpenSidebar());
  };

  const sidebarItems = [
    { icon: <MdDashboard />, label: "Dashboard", path: "/admin/dashboard" },
    { icon: <ImUsers />, label: "Manage Users", path: "/admin/users" },
    { icon: <FaBoxOpen />, label: "Manage Products", path: "/admin/products" },
    { icon: <FaBoxOpen />, label: "Manage Orders", path: "/admin/orders" },
    {
      icon: <FaBoxOpen />,
      label: "Manage Deliveries",
      path: "/admin/deliveries",
    },
    { icon: <FaBitcoin />, label: "Manage Payments", path: "/admin/payments" },
    { icon: <LuFiles />, label: "Reports", path: "/admin/reports" },
    { icon: <FaBell />, label: "Notifications", path: "/admin/notification" },
    { icon: <FaGear />, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <div className={`admin sidebar ${isSidebarOpen ? "active" : ""}`}>
      <div className="sidebar-content">
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} onClick={hideSidebar}>
              <Link to={item.path}>
                <span>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
