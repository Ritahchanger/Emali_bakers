import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            <a href="/admin/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/admin/users">Manage Users</a>
          </li>
          <li>
            <a href="/admin/products">Manage Products</a>
          </li>
          <li>
            <a href="/admin/orders">Manage Orders</a>
          </li>
          <li>
            <a href="/admin/deliveries">Manage Deliveries</a>
          </li>
          <li>
            <a href="/admin/payments">Manage Payments</a>
          </li>
          <li>
            <a href="/admin/reports">View Reports</a>
          </li>
          <li>
            <a href="/admin/notifications">Notifications</a>
          </li>
          <li>
            <a href="/admin/settings">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
