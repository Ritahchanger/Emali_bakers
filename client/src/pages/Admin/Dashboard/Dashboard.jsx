import AdminNavbar from "../../../components/Admin/AdminNavbar/AdminNavbar";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "./Dashboard.css";
import React, { useRef } from "react";

import PriceFlactuation from "./PriceFlactuation";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const chartRef = useRef(null);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales (USD)",
        data: [5000, 7000, 8000, 12000, 15000, 11000, 13000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Orders (Units)",
        data: [50, 70, 60, 100, 120, 90, 110],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "E-Commerce Monthly Sales & Orders",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid:{
            display:false,
        }
      },
      x:{
        grid:{
            display:false
        }
      }
    },
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <AdminSidebar />
      <div className="container">
        <div className="admin-dashboard-inner-container">
          <div className="left-side">
            <Bar ref={chartRef} data={data} options={options} />
            <PriceFlactuation />
          </div>
          <div className="right-side">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum quasi sit mollitia deserunt incidunt veniam obcaecati perferendis necessitatibus praesentium, enim impedit eius, suscipit provident aspernatur neque debitis ea, similique id officia quisquam animi aliquam sint. Dignissimos, quaerat impedit! Repudiandae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
