import React from "react";
import AdminNavbar from "../../../components/Admin/AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

import "./AdminUsers.css";

const AdminUsers = () => {
  const dummyData = [
    {
      bssName: "Bakery One",
      bssType: "Food",
      bssPhone: "0712345678",
      bssEmail: "bakery1@example.com",
      countyName: "Nairobi",
      cityName: "Nairobi",
      streetName: "Tom Mboya Street",
      contactPerson: {
        fName: "John",
        lName: "Doe",
        jobTitle: "Manager",
        phoneNo: "0712345678",
      },
      bussUsername: "bakeryone",
    },

    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
    {
      bssName: "Bakery Twenty",
      bssType: "Pastry",
      bssPhone: "0712987654",
      bssEmail: "bakery20@example.com",
      countyName: "Kisumu",
      cityName: "Kisumu",
      streetName: "Oginga Odinga Street",
      contactPerson: {
        fName: "Jane",
        lName: "Smith",
        jobTitle: "Owner",
        phoneNo: "0712987654",
      },
      bussUsername: "bakerytwenty",
    },
  ];

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <AdminSidebar />
      <div className="container">
        <div className="users-container">
          <div className="table-wrapper">
            <table>
              <thead
                style={{
                  background: "#340290",
                }}
              >
                <tr>
                  <th>BSS NAME</th>
                  <th>BSS TYPE</th>
                  <th>BSS PHONE</th>
                  <th>BSS EMAIL</th>
                  <th>COUNTY NAME</th>
                  <th>CITY NAME</th>
                  <th>STREET NAME</th>
                  <th>CONTACT PERSON</th>
                  <th>BUSS USERNAME</th>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>
                    <table>
                      <thead
                        style={{
                          background: "var(--header3)",
                        }}
                      >
                        <tr>
                          <th>FNAME</th>
                          <th>LNAME</th>
                          <th>JOB TITLE</th>
                          <th>PHONE NO</th>
                        </tr>
                      </thead>
                    </table>
                  </th>
                  <th></th>
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
