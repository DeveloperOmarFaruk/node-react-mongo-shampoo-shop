import React from "react";
import "./MultipleComponents.css";
import Banner1 from "../../Images/Assets/background1.png";
import useFunction from "../../Hooks/useFunction";

const Banner = () => {
  const { navigate } = useFunction();
  return (
    <>
      <div className="banner-container">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active banner-container-div"
              data-bs-interval="5000"
            >
              <img
                src={Banner1}
                className="d-block banner-image"
                alt="banner_image"
              />
              <div className="carousel-caption d-flex flex-column h-100 align-items-start justify-content-center bottom-0 banner-text">
                <p>Have It All Hair Pure Nature Pure You</p>
                <h1 className="pb-0 mb-0">Aussie shampoos,</h1>
                <h1 className="pt-0 mt-0" style={{ marginBottom: "2rem" }}>
                  {" "}
                  conditioners and more.
                </h1>

                <button
                  className="btn btn-outline-light px-4 py-2 rounded-0"
                  onClick={() => {
                    navigate(`/products`);
                    window.scrollTo(0, 0);
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div
              className="carousel-item banner-container-div"
              data-bs-interval="5000"
            >
              <img
                src={Banner1}
                className="d-block banner-image"
                alt="banner_image"
              />
              <div className="carousel-caption d-flex flex-column h-100 align-items-start justify-content-center bottom-0 banner-text">
                <p>Have It All Hair Pure Nature Pure You</p>
                <h1 className="pb-0 mb-0">Aussie shampoos,</h1>
                <h1 className="pt-0 mt-0" style={{ marginBottom: "2rem" }}>
                  {" "}
                  conditioners and more.
                </h1>

                <button
                  className="btn btn-outline-light px-4 py-2 rounded-0"
                  onClick={() => {
                    navigate(`/products`);
                    window.scrollTo(0, 0);
                  }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="banner-bottom-card">
        <div className="section">
          <div className="row gx-5 gy-5 ">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
              <div className="banner-botom-card-div-1">
                <div className="banner-botom-card-info">
                  <div>
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div>
                    <h6>Opening Hours</h6>
                    <p>Every Day 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
              <div className="banner-botom-card-div-2">
                <div className="banner-botom-card-info">
                  <div>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h6>Visit Our Location</h6>
                    <p>Gulshan-1, Block-C, Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
              <div className="banner-botom-card-div-1">
                <div className="banner-botom-card-info">
                  <div>
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div>
                    <h6>Contact Us Now</h6>
                    <p>+880 1756654160 / +880 1542454651</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
