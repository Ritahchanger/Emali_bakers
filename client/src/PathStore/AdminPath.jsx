import AdminHome from "../pages/Admin/Home/AdminHome";
import AdminUsers from "../pages/Admin/AdminUsers/AdminUsers";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
const adminHomePath = {
  path: "/admin/dashboard/home",
  element: <AdminHome />,
};
const adminDashboard = {
  path: "/admin/dashboard",
  element: <Dashboard />,
};
const manageUsers = {
  path: "/admin/users",
  element: <AdminUsers />,
};

export { adminHomePath, manageUsers, adminDashboard };
