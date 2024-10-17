import React from "react";
import AdminNavbar from "../../../components/Admin/AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./AdminUsers.css";
import dummyData from "../../../Data/UsersDummyData";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const AdminUsers = () => {
  const handleEdit = () => {
    MySwal.fire({
      title: "Edit User",
      input: "text",
      inputLabel: "Edit username",
      inputValue: "DennisPeter",
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: (newUsername) => {
        console.log("Edited username:", newUsername);
      },
    });
  };

  const handleDelete = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: `Do you want to delete Dennis?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <AdminSidebar />
      <div className="container">
        <div className="users-container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>BSS NAME</th>
                  <th>BSS TYPE</th>
                  <th>BSS PHONE</th>
                  <th>BSS EMAIL</th>
                  <th>COUNTY NAME</th>
                  <th>CITY NAME</th>
                  <th>STREET NAME</th>
                  <th>
                    CONTACT PERSON
                    <table>
                      <thead>
                        <tr>
                          <th>FNAME</th>
                          <th>LNAME</th>
                          <th>JOB TITLE</th>
                          <th>PHONE NO</th>
                        </tr>
                      </thead>
                    </table>
                  </th>
                  <th>BUSS USERNAME</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.bssName}</td>
                    <td>{data.bssType}</td>
                    <td>{data.bssPhone}</td>
                    <td>{data.bssEmail}</td>
                    <td>{data.countyName}</td>
                    <td>{data.cityName}</td>
                    <td>{data.streetName}</td>
                    <td>
                      <table>
                        <tbody>
                          <tr>
                            <td>{data.contactPerson.fName}</td>
                            <td>{data.contactPerson.lName}</td>
                            <td>{data.contactPerson.jobTitle}</td>
                            <td>{data.contactPerson.phoneNo}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>{data.bussUsername}</td>
                    <td>
                      <button className="utility-btn edit" onClick={handleEdit}>
                        <span>
                          <FaEdit />
                        </span>
                      </button>
                    </td>
                    <td>
                      <button
                        className="utility-btn delete"
                        onClick={handleDelete}
                      >
                        <span>
                          <FaTrash />
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
