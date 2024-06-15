import React from "react";
import useFunction from "../../Hooks/useFunction";

const Products = () => {
  const { products, navigate } = useFunction();
  return (
    <>
      <div style={{ padding: "10rem 0rem" }}>
        <div className="section">
          <h5
            className="text-center text-uppercase"
            style={{ color: "#c033ca", fontWeight: "600" }}
          >
            Our Products
          </h5>
          <h1
            className="text-center"
            style={{
              color: "#202020",
              fontWeight: "700",
              marginBottom: "5rem",
            }}
          >
            Products We Provide
          </h1>

          <div className="row  gy-1">
            {products.map((item) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                key={item._id}
              >
                <div class="product-card">
                  <img
                    src={item.productImage}
                    alt="Product_Image"
                    className="product-image"
                  />
                  <div className="pe-2 ps-2 text-center">
                    <h3
                      className="product-name"
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {item.productTitle}
                    </h3>
                    <p className="product-description">
                      {item.productDescription}
                    </p>

                    <div className="product-price">
                      <span className="product-review">
                        <i className="fa-solid fa-star"></i>&nbsp;4.5/5
                        &nbsp;(300) &nbsp;&nbsp;2k sold
                      </span>
                    </div>

                    <div className="product-price">
                      {item.productDiscountPrice === 0 ? (
                        <>
                          <span className="original-price"></span>
                          <span className="discount-percentage "></span>
                        </>
                      ) : (
                        <>
                          <span className="original-price">
                            ${item.productPrice}
                          </span>
                          <span className="discount-percentage ">
                            -{item.productDiscount}%
                          </span>
                        </>
                      )}
                    </div>
                    <div className="product-price">
                      <span className="discount-price">
                        $
                        {item.productDiscountPrice === 0
                          ? item.productPrice
                          : item.productDiscountPrice}
                      </span>
                    </div>
                    <button
                      className="add-to-cart-button"
                      onClick={() => navigate(`/purchase/${item._id}`)}
                    >
                      <i className="fa-solid fa-cart-shopping"></i>&nbsp; Add to
                      Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
