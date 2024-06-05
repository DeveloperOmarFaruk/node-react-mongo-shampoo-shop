import React from "react";
import "./MultipleComponents.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="section">
          <h5
            className="text-center text-uppercase"
            style={{ color: "#c033ca", fontWeight: "600" }}
          >
            About Us
          </h5>
          <h1
            className="text-center"
            style={{
              color: "#202020",
              fontWeight: "700",
              marginBottom: "5rem",
            }}
          >
            Who We Are
          </h1>

          <div className="row gx-5 gy-5">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="about-col-div">
                <img
                  src="https://shampoo-demo.myshopify.com/cdn/shop/files/2.jpg?v=1613793175"
                  alt="about_image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="about-col-div">
                <h1>
                  Eco-Friendly Elegance
                  <br />
                  Nurture Your Hair Naturally
                </h1>
                <p>
                  At Shampoo, we believe that everyone deserves to have healthy,
                  beautiful hair. Our online store offers a wide range of
                  premium hair care products designed to meet the unique needs
                  of every hair type and concern. Whether you're looking for a
                  gentle daily cleanser, a nourishing treatment for dry hair, or
                  a color-protecting formula to keep your dye job vibrant, we've
                  got you covered.
                </p>

                <p>
                  Explore our extensive range of shampoos tailored to various
                  hair types and needs. From moisturizing and volumizing to
                  anti-dandruff and color-safe, find the perfect match for your
                  hair.
                </p>
                <button>More About</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
