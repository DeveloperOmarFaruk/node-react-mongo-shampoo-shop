import React from "react";
import "../Dashboard.css";
import useFunction from "../../../Hooks/useFunction";
import DashboardHomeChart from "./DashboardHomeChart";

const DashboardHome = () => {
  const { users, products, ordersAdmin, contacts } = useFunction();
  return (
    <>
      <div
        style={{
          padding: "1rem 1.3rem 1rem 0rem",
          margin: "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <h4 style={{ color: "#c033ca" }}>Dashboard </h4>
        </div>

        <div style={{ margin: "2rem 0rem 3rem 0rem" }}>
          <div className="row gx-3 gy-5">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div
                className="dashboard-home-info-card"
                style={{ backgroundColor: "#A569BD" }}
              >
                <h4>{users.length}</h4>
                <p>
                  Total
                  <br />
                  Users
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div
                className="dashboard-home-info-card"
                style={{ backgroundColor: "#2ECC71" }}
              >
                <h4> {products.length}</h4>
                <p>
                  Total
                  <br />
                  Products
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div
                className="dashboard-home-info-card"
                style={{ backgroundColor: "#3498DB" }}
              >
                <h4> {ordersAdmin.length}</h4>
                <p>
                  Total
                  <br />
                  Orders
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div
                className="dashboard-home-info-card"
                style={{ backgroundColor: "#EC7063 " }}
              >
                <h4>{contacts.length}</h4>
                <p>
                  Total
                  <br />
                  Contacts
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-chart">
          <DashboardHomeChart
            users={users}
            products={products}
            ordersAdmin={ordersAdmin}
            contacts={contacts}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
