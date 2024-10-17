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

  // Sample data for Drivers
  const driversData = [
    {
      name: "John Doe",
      idNo: "12345678",
      phoneNo: "0712345678",
      route: "Nairobi to Mombasa",
    },
    {
      name: "Jane Smith",
      idNo: "87654321",
      phoneNo: "0723456789",
      route: "Kisumu to Nairobi",
    },
    {
      name: "Samuel Karanja",
      idNo: "11223344",
      phoneNo: "0734567890",
      route: "Eldoret to Nakuru",
    },
  ];

  // Sample data for Employees
  const employeesData = [
    {
      name: "Alice Wanjiru",
      idNo: "1234",
      phoneNo: "0745678901",
      email: "alice@example.com",
      roles: "Manager",
    },
    {
      name: "Bob Mwangi",
      idNo: "5678",
      phoneNo: "0756789012",
      email: "bob@example.com",
      roles: "Supervisor",
    },
    {
      name: "Clara Otieno",
      idNo: "9101",
      phoneNo: "0767890123",
      email: "clara@example.com",
      roles: "Driver",
    },
  ];

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <AdminSidebar />
      <div className="container">
        <div className="users-container">
          <p className="title">OUR RETAILERS</p>
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
          <div className="company-officials">
            <p className="title">COMPANY OFFICIALS</p>
            <div className="grid">
              <div className="card">
                <p className="sub-title">Drivers</p>
                <div className="card-table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Idno</td>
                        <td>PhoneNo</td>
                        <td>Route</td>
                        <td>Delete</td>
                        <td>Edit</td>
                      </tr>
                    </thead>
                    <tbody>
                      {driversData.map((driver, index) => (
                        <tr key={index}>
                          <td>{driver.name}</td>
                          <td>{driver.idNo}</td>
                          <td>{driver.phoneNo}</td>
                          <td>{driver.route}</td>
                          <td>
                            <button
                              className="utility-btn edit"
                              onClick={handleEdit}
                              style={{
                                height: "30px",
                                width: "30px",
                              }}
                            >
                              <span>
                                <FaEdit />
                              </span>
                            </button>
                          </td>
                          <td>
                            <button
                              className="utility-btn delete"
                              onClick={handleDelete}
                              style={{
                                height: "30px",
                                width: "30px",
                              }}
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
              <div className="card">
                <p className="sub-title">Employees</p>
                <div className="card-table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Idno</td>
                        <td>PhoneNo</td>
                        <td>Email</td>
                        <td>Roles</td>
                        <td>Edit</td>
                        <td>Delete</td>
                      </tr>
                    </thead>
                    <tbody>
                      {employeesData.map((employee, index) => (
                        <tr key={index}>
                          <td>{employee.name}</td>
                          <td>{employee.idNo}</td>
                          <td>{employee.phoneNo}</td>
                          <td>{employee.email}</td>
                          <td>{employee.roles}</td>
                          <td>
                            <button
                              className="utility-btn edit"
                              onClick={handleEdit}
                              style={{
                                height: "30px",
                                width: "30px",
                              }}
                            >
                              <span>
                                <FaEdit />
                              </span>
                            </button>
                          </td>
                          <td>
                            <button
                              className="utility-btn delete"
                              onClick={handleDelete}
                              style={{
                                height: "30px",
                                width: "30px",
                              }}
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
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
