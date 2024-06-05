import React from "react";
import "./MultipleComponents.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProducts = () => {
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
              <div>
                <div class="product-card">
                  <img
                    src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="Product Name"
                    className="product-image"
                  />
                  <div className="pe-2 ps-2 text-center">
                    <h3 className="product-name">Product Name</h3>
                    <p className="product-description">
                      Mini Metal Portable Wireless Bluetooth Speaker Mini Metal
                      Portable Wireless Bluetooth Speaker
                    </p>

                    <div className="product-price">
                      <span className="product-review">
                        <i className="fa-solid fa-star"></i>&nbsp;4.5/5
                        &nbsp;(300) &nbsp;&nbsp;2k sold
                      </span>
                    </div>

                    <div className="product-price">
                      <span className="original-price">$200</span>
                      <span className="discount-percentage ">-50%</span>
                    </div>
                    <div className="product-price">
                      <span className="discount-price">$79.99</span>
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              </div>

              <div>
                <div class="product-card">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt="Product Name"
                    className="product-image"
                  />
                  <div className="pe-2 ps-2 text-center">
                    <h3 className="product-name">Product Name</h3>
                    <p className="product-description">
                      Mini Metal Portable Wireless Bluetooth Speaker Mini Metal
                      Portable Wireless Bluetooth Speaker
                    </p>

                    <div className="product-price">
                      <span className="product-review">
                        <i className="fa-solid fa-star"></i>&nbsp;4.5/5
                        &nbsp;(300) &nbsp;&nbsp;2k sold
                      </span>
                    </div>

                    <div className="product-price">
                      <span className="original-price">$200</span>
                      <span className="discount-percentage ">-50%</span>
                    </div>
                    <div className="product-price">
                      <span className="discount-price">$79.99</span>
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              </div>

              <div>
                <div class="product-card">
                  <img
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80"
                    alt="Product Name"
                    className="product-image"
                  />
                  <div className="pe-2 ps-2 text-center">
                    <h3 className="product-name">Product Name</h3>
                    <p className="product-description">
                      Mini Metal Portable Wireless Bluetooth Speaker Mini Metal
                      Portable Wireless Bluetooth Speaker
                    </p>

                    <div className="product-price">
                      <span className="product-review">
                        <i className="fa-solid fa-star"></i>&nbsp;4.5/5
                        &nbsp;(300) &nbsp;&nbsp;2k sold
                      </span>
                    </div>

                    <div className="product-price">
                      <span className="original-price"></span>
                      <span className="discount-percentage "></span>
                    </div>
                    <div className="product-price">
                      <span className="discount-price">$79.99</span>
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              </div>

              <div>
                <div class="product-card">
                  <img
                    src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2023/04/Urwerk-UR-210-RG-Titanium-Rose-Gold-Automatic-Movement-Masthead-Mobile.jpg"
                    alt="Product Name"
                    className="product-image"
                  />
                  <div className="pe-2 ps-2 text-center">
                    <h3 className="product-name">Product Name</h3>
                    <p className="product-description">
                      Mini Metal Portable Wireless Bluetooth Speaker Mini Metal
                      Portable Wireless Bluetooth Speaker
                    </p>

                    <div className="product-price">
                      <span className="product-review">
                        <i className="fa-solid fa-star"></i>&nbsp;4.5/5
                        &nbsp;(300) &nbsp;&nbsp;2k sold
                      </span>
                    </div>

                    <div className="product-price">
                      <span className="original-price">$200</span>
                      <span className="discount-percentage ">-50%</span>
                    </div>
                    <div className="product-price">
                      <span className="discount-price">$79.99</span>
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
