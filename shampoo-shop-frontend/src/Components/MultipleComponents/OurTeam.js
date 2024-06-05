import React from "react";
import "./MultipleComponents.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
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
      <div className="our-team-container">
        <div className="section">
          <h5
            className="text-center text-uppercase"
            style={{ color: "#c033ca", fontWeight: "600" }}
          >
            Meet Our Team
          </h5>
          <h1
            className="text-center"
            style={{
              color: "#202020",
              fontWeight: "700",
              marginBottom: "2rem",
            }}
          >
            Our Creative Team
          </h1>

          <div>
            <Slider {...settings}>
              <div>
                <div className="our-team-section-div">
                  <img
                    src="https://img.freepik.com/premium-photo/charming-businessman-with-glasses-vibrant-portrait-pink-background_1000124-63203.jpg"
                    alt="doctor_image"
                  />
                  <div className="our-team-section-div-info">
                    <div>
                      <h5>Mr. Salman Sha</h5>
                      <p> Founder & Managing Deractor</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="our-team-section-div">
                  <img
                    src="https://img.freepik.com/premium-photo/woman-pink-blazer-stands-front-pink-background_811553-1021.jpg"
                    alt="doctor_image"
                  />
                  <div className="our-team-section-div-info">
                    <div>
                      <h5>Mst. Sabnur Akter</h5>
                      <p> Co Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="our-team-section-div">
                  <img
                    src="https://img.freepik.com/premium-photo/businessman-woman-wear-pink-suit-with-clean-background_997534-9912.jpg"
                    alt="doctor_image"
                  />
                  <div className="our-team-section-div-info">
                    <div>
                      <h5>Mst. Puja Cheri</h5>
                      <p>Marketing Head</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="our-team-section-div">
                  <img
                    src="https://img.freepik.com/premium-photo/man-green-blazer-stands-front-pink-background_896360-1479.jpg"
                    alt="doctor_image"
                  />
                  <div className="our-team-section-div-info">
                    <div>
                      <h5>Mr. Sakib Khan</h5>
                      <p> Head of HR</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="our-team-section-div">
                  <img
                    src="https://img.freepik.com/premium-photo/african-american-businessman-wearing-business-suit-tie-pink-background-with-confident-expre_912214-22555.jpg"
                    alt="doctor_image"
                  />
                  <div className="our-team-section-div-info">
                    <div>
                      <h5>Mr. Alomgir Khan</h5>
                      <p> Head of Sales</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="our-team-section-div">
                  <img
                    src="https://img.freepik.com/premium-photo/young-asian-woman-solid-pink-backgroung_172415-1730.jpg"
                    alt="doctor_image"
                  />
                  <div className="our-team-section-div-info">
                    <div>
                      <h5>Mst. Sabana Sikdar</h5>
                      <p> Head of Sponsor</p>
                    </div>
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

export default OurTeam;
