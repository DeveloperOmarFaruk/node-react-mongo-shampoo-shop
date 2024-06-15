import React from "react";
import OrderTable from "./OrderTable";

const DashboardOrder = () => {
  return (
    <>
      <div style={{ padding: "1rem 1.3rem 1rem 0rem", margin: "0px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <h4 style={{ color: "#c033ca" }}>Dashboard Orders</h4>
        </div>

        <div className="mt-4">
          <OrderTable />
        </div>
      </div>
    </>
  );
};

export default DashboardOrder;
