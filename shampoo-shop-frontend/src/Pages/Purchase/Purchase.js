import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import useFunction from "../../Hooks/useFunction";
import axios from "axios";

const Purchase = () => {
  const id = useParams();

  const {
    URL,
    setProduct,
    product,
    productIncriDecri,
    productTotalAmount,
    handleProductIncriment,
    handleProductDecriment,
    handleConfirmOrder,
  } = useFunction();

  useEffect(() => {
    axios
      .get(`${URL}/products/${id.id}`)
      .then((res) => setProduct(res.data))
      .catch(function (error) {
        console.log(error);
      });
  }, [URL, id, setProduct]);

  return (
    <>
      <div style={{ padding: "10rem 0rem 10rem 0rem" }}>
        <div className="section">
          <div className="row gx-5 gy-5 row-edit">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img
                src={product.productImage}
                alt="product_image"
                style={{ width: "100%", height: "600px" }}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5
                style={{
                  margin: "10px 0px",
                  fontSize: "1.8rem",
                  color: "#c033ca",
                }}
              >
                {product.productTitle}
              </h5>
              <p style={{ margin: "10px 0px" }}>{product.productDescription}</p>
              <h6 style={{ margin: "10px 0px", fontSize: "1.3rem" }}>
                <span>Category: </span>
                {product.productCategory}
              </h6>

              <h6 style={{ margin: "10px 0px", fontSize: "1.3rem" }}>
                <span>Price: </span>$&nbsp;
                {product.productDiscountPrice
                  ? product.productDiscountPrice
                  : product.productPrice}{" "}
                <i className="fa-solid fa-xmark"></i> {productIncriDecri}
              </h6>
              <div className="mt-4 mb-4">
                <button
                  type="button"
                  className="btn btn-secondary me-2 pt-1 pb-1"
                  onClick={handleProductIncriment}
                >
                  <i className="fa-solid fa-plus "></i>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2 pt-1 pb-1"
                  onClick={handleProductDecriment}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
              </div>

              <h5 style={{ margin: "10px 0px", fontSize: "1.3rem" }}>
                <span>Total Pay: </span>${" "}
                {productTotalAmount === 0 ? (
                  <>
                    {product.productDiscountPrice
                      ? product.productDiscountPrice
                      : product.productPrice}
                  </>
                ) : (
                  productTotalAmount
                )}
              </h5>

              <button
                className="add-to-cart-button"
                onClick={handleConfirmOrder}
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
