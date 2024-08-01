import React, { useState } from "react";
import useFunction from "../../Hooks/useFunction";
import Loading from "../../Components/MultipleComponents/Loading";

const Products = () => {
  const [searchName, setSearchName] = useState("");
  const [selectCategory, setSelectCategory] = useState("");

  const { products, navigate, loading } = useFunction();

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

          <div className="d-flex">
            <div
              className="form-floating "
              style={{ width: "50%", margin: "10px" }}
            >
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Search Product..."
                style={{ border: "1px solid #c033ca" }}
                onChange={(e) => setSearchName(e.target.value)}
              />
              <label for="floatingInput">Search Product...</label>
            </div>

            <div
              class="form-floating "
              style={{ width: "50%", margin: "10px" }}
            >
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                style={{ border: "1px solid #c033ca" }}
                onClick={(e) => setSelectCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Baby">Baby</option>
              </select>
              <label for="floatingSelect">Select Category</label>
            </div>
          </div>

          <div className="row row-edit">
            {loading ? (
              <div>
                <Loading />
              </div>
            ) : (
              <>
                {products &&
                  products
                    .filter((item) => {
                      if (selectCategory === "Men") {
                        return item.productCategory === selectCategory;
                      } else if (selectCategory === "Women") {
                        return item.productCategory === selectCategory;
                      } else if (selectCategory === "Baby") {
                        return item.productCategory === selectCategory;
                      } else return item;
                    })
                    .filter((item) => {
                      if (searchName === "") {
                        return item;
                      } else {
                        return item.productTitle
                          .toLowerCase()
                          .includes(searchName.toLowerCase());
                      }
                    })
                    .map((item) => (
                      <div
                        className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                        key={item._id}
                      >
                        <div className="product-card">
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
                              <i className="fa-solid fa-cart-shopping"></i>
                              &nbsp; Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
