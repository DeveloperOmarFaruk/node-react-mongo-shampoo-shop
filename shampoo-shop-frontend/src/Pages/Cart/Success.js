import React from "react";
import { useNavigate } from "react-router";

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ padding: "10rem 0rem" }}>
        <div className="section text-center">
          <h5 style={{ color: "#c033ca" }}>
            Congratulation Your Payment Successful.
          </h5>
          <button
            className="add-to-cart-button mt-4"
            onClick={() => navigate(`/my-order`)}
          >
            My Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Success;
