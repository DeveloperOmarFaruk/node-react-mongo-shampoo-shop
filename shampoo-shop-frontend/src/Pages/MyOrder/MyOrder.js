import React from "react";
import useFunction from "../../Hooks/useFunction";
import MyOrderTable from "./MyOrderTable";

const MyOrder = () => {
  const { orders } = useFunction();
  return (
    <>
      <div style={{ padding: "10rem 0rem" }}>
        <div className="section">
          {orders.length !== 0 ? (
            <>
              <MyOrderTable />
            </>
          ) : (
            <>
              <h3
                className="text-center"
                style={{ margin: "5rem 0rem", color: "#c033ca" }}
              >
                No Order
              </h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrder;
