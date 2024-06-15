import React from "react";
import "./MultipleComponents.css";
import useFunction from "../../Hooks/useFunction";

const ShopNow = () => {
  const { navigate } = useFunction();
  return (
    <>
      <div className="shopNow-home-container">
        <div className="section">
          <div className="row gy-3 gx-5 row-edit ">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="shopNow-div ">
                <img
                  src="https://img.freepik.com/premium-photo/asian-girl-has-nice-hairstyle-pink-background_639785-3878.jpg"
                  alt="shopNow_image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="shopNow-div">
                <h5
                  className="text-left text-uppercase"
                  style={{ fontWeight: "600" }}
                >
                  shop Now
                </h5>
                <h1
                  className="text-left"
                  style={{
                    fontWeight: "700",
                    marginBottom: "2rem",
                  }}
                >
                  Make an shop now <br />
                  Today
                </h1>

                <p
                  style={{
                    fontWeight: "200",
                    marginBottom: "1rem",
                  }}
                >
                  We prioritize products that are made with natural and organic
                  ingredients, free from harsh chemicals like sulfates,
                  parabens, and artificial fragrances. Our commitment to
                  sustainability means you can feel good about the products you
                  use on your hair and the impact they have on the environment.
                </p>

                <p
                  style={{
                    fontWeight: "200",
                    marginBottom: "1rem",
                  }}
                >
                  Your satisfaction is our top priority. We offer a hassle-free
                  return and exchange policy, ensuring that you can shop with
                  confidence. If a product doesn’t meet your expectations, we’ll
                  make it right.
                </p>
                <button
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
        </div>
      </div>
    </>
  );
};

export default ShopNow;
