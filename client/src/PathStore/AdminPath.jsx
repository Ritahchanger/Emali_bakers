import AdminHome from "../pages/Admin/Home/AdminHome";
import AdminUsers from "../pages/Admin/AdminUsers/AdminUsers";
const adminHomePath = {
  path: "/admin/dashboard/home",
  element: <AdminHome />,
};

const manageUsers = {
  path: "/admin/users",
  element: <AdminUsers />,
};

export { adminHomePath, manageUsers };
