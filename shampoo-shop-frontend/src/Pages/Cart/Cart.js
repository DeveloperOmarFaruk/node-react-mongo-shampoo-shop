import React from "react";
import useFunction from "../../Hooks/useFunction";
import useFirebase from "../../Hooks/useFirebase";

const Cart = () => {
  const {
    temporaryOrders,
    itemTotal,
    deliveryCharge,
    totalPay,
    shippingData,
    quantityTotal,
    handleTemporaryOrderDelete,
    handleShippingDataChange,
    handleCheckoutStripe,
  } = useFunction();

  const { userInfo } = useFirebase();

  return (
    <>
      <div style={{ padding: "10rem 0rem" }}>
        <div className="section">
          <div className="row gx-5 gy-5 flex-wrap-reverse">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5
                className="text-center"
                style={{
                  margin: "10px 0px 40px 0px",
                  fontSize: "1.8rem",
                  color: "#c033ca",
                }}
              >
                Shipping Information
              </h5>

              <div>
                <form onSubmit={handleCheckoutStripe}>
                  <div className="form-floating mb-4 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Name"
                      name="name"
                      value={userInfo.displayName}
                      required
                      disabled
                      style={{ border: "1px solid #c033ca" }}
                    />
                    <label for="floatingInput">Name</label>
                  </div>
                  <div className="form-floating mb-4 mt-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Email"
                      name="email"
                      value={userInfo.email}
                      required
                      disabled
                      style={{ border: "1px solid #c033ca" }}
                    />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-4 mt-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Phone"
                      name="phone"
                      value={shippingData.phone}
                      onChange={handleShippingDataChange}
                      required
                      style={{ border: "1px solid #c033ca" }}
                    />
                    <label for="floatingInput">Phone</label>
                  </div>
                  <div className="form-floating mb-4 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Address"
                      name="address"
                      value={shippingData.address}
                      onChange={handleShippingDataChange}
                      required
                      style={{ border: "1px solid #c033ca" }}
                    />
                    <label for="floatingInput">Address</label>
                  </div>
                  <button
                    type="submit"
                    className="btn text-white"
                    style={{ backgroundColor: "#c033ca" }}
                  >
                    Checkout Stripe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5
                className="text-center"
                style={{
                  margin: "10px 0px 40px 0px",
                  fontSize: "1.8rem",
                  color: "#c033ca",
                }}
              >
                Order Summary ({quantityTotal})
              </h5>

              {temporaryOrders.map((item) => (
                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #c033ca",
                    padding: "10px",
                    margin: "10px 0px",
                  }}
                  key={item._id}
                >
                  <div className="row align-items-center">
                    <div className="col-3 text-center ">
                      <div>
                        <img
                          src={item.productImage}
                          alt="product_image"
                          style={{ width: "60%", height: "70px" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 ">
                      <h6>{item.productTitle}</h6>
                      <p className="mt-2 mb-2">Qty: {item.productQuantity}</p>
                      <h6>$ {item.productTotalAmount}</h6>
                    </div>
                    <div className="col-3 text-center">
                      <p
                        style={{
                          cursor: "pointer",
                          color: "red",
                          fontSize: "1.5rem",
                        }}
                        onClick={() => handleTemporaryOrderDelete(item._id)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-between align-items-center ps-3 pe-3 mt-4 ms-2 me-2">
                <p className="fw-bolder">Item Total:</p>
                <p>$ {itemTotal}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center ps-3 pe-3 mt-2 ms-2 me-2">
                <p className="fw-bolder">Delivery:</p>
                <p>$ {deliveryCharge}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center fw-bold fs-5 ps-3 pe-3 mt-2 ms-2 me-2">
                <p>Total Pay:</p>
                <p>$ {totalPay}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
