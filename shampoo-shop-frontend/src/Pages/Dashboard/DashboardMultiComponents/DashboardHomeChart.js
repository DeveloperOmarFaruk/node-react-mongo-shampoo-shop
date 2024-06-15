import React from "react";
import Chart from "react-apexcharts";

const DashboardHomeChart = ({ users, products, ordersAdmin, contacts }) => {
  const series = [
    users.length,
    products.length,
    ordersAdmin.length,
    contacts.length,
  ];
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    colors: ["#A569BD", "#2ECC71", "#3498DB", "#EC7063"],
    labels: ["Users", "Products", "Orders", "Contacts"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <>
      <div id="chart">
        <Chart options={options} series={series} type="pie" height={350} />
      </div>
    </>
  );
};

export default DashboardHomeChart;
