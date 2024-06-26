import React from "react";
import "./MultipleComponents.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
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
      <div className="review-container">
        <div className="section">
          <h5
            className="text-left text-uppercase"
            style={{ color: "#c033ca", fontWeight: "600" }}
          >
            Testimonial
          </h5>
          <h1
            className="text-left"
            style={{
              color: "#202020",
              fontWeight: "700",
              marginBottom: "5rem",
            }}
          >
            What's Our Customers
            <br /> Says
          </h1>

          <div>
            <Slider {...settings}>
              <div>
                <div className="review-section-div">
                  <p>
                    "I’ve struggled with dry, frizzy hair for years, but ever
                    since I started using Shampoo Shop, my hair has never looked
                    better. I’m a customer for life!"
                  </p>
                  <div className="review-section-div-info">
                    <img
                      src="https://www.broomfielddentists.com/wp-content/uploads/technology_premier_dentistry-1024x684.jpg.webp"
                      alt="review_image"
                    />
                    <div>
                      <h5>John D.</h5>
                      <p> Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="review-section-div">
                  <p>
                    "As someone who frequently colors their hair, finding a good
                    shampoo is essential. Shampoo Shop has kept my color vibrant
                    and my hair healthy between salon visits."
                  </p>
                  <div className="review-section-div-info">
                    <img
                      src="https://d11upr8lrcn9x7.cloudfront.net/www.parkmeadowsdentalgroup.com/s3fs-public/patient-overcoming-dental-fear.jpeg"
                      alt="review_image"
                    />
                    <div>
                      <h5>Anna B.</h5>
                      <p> Khulna, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="review-section-div">
                  <p>
                    "After just a few washes, I noticed a significant
                    improvement in the texture and volume of my hair. It’s looks
                    healthier overall. Thank you, Shampoo Shop!"
                  </p>
                  <div className="review-section-div-info">
                    <img
                      src="https://lirp.cdn-website.com/3569e87d/dms3rep/multi/opt/Cornell_SmilingPatientInDentalChair-640w.jpg"
                      alt="review_image"
                    />
                    <div>
                      <h5>David K.</h5>
                      <p> Barisal, Bangladesh</p>
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

export default Review;
