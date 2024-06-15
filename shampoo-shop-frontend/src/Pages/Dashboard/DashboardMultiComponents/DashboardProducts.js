import React from "react";
import "../Dashboard.css";
import ProductTable from "./ProductTable";
import useFunction from "../../../Hooks/useFunction";

const DashboardProducts = () => {
  const { navigate } = useFunction();
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
          <h4 style={{ color: "#c033ca" }}>Dashboard Products</h4>

          <button
            type="button"
            className="btn text-white"
            style={{ backgroundColor: "#c033ca" }}
            onClick={() => navigate(`/dashboard/product-add`)}
          >
            Add Product
          </button>
        </div>

        <ProductTable />
      </div>
    </>
  );
};

export default DashboardProducts;
