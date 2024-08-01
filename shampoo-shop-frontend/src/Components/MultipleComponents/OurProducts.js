import React from "react";
import "./MultipleComponents.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFunction from "../../Hooks/useFunction";

const OurProducts = () => {
  const { products, navigate } = useFunction();
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="our-service-container">
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

          <div>
            <Slider {...settings}>
              {products.map((item) => (
                <div key={item._id}>
                  <div className="product-card" style={{ width: "290px" }}>
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
                        onClick={() => {
                          navigate(`/purchase/${item._id}`);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <i className="fa-solid fa-cart-shopping"></i>&nbsp; Add
                        to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
