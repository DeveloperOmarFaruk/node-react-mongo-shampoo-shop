import React from "react";

const WhyChoose = () => {
  return (
    <>
      <div className="why-choose-container">
        <div className="section">
          <div className="row gx-5 gy-5 flex-wrap-reverse">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="why-choose-left-info">
                <h1>
                  Why Choose <br />
                  Shampoo Brand?
                </h1>

                <p>
                  Explore our extensive range of shampoos tailored to various
                  hair types and needs. From moisturizing and volumizing to
                  anti-dandruff and color-safe, find the perfect match for your
                  hair.
                  <br />
                  Complement your shampoo with our line of conditioners that
                  provide extra hydration, shine, and manageability.
                </p>

                <div className="why-choose-left-info-div">
                  <div>
                    <i className="fa-brands fa-product-hunt"></i>
                  </div>

                  <div>
                    <h4>Premium Quality Products</h4>
                    <p>
                      We are committed to providing only the highest quality
                      shampoos made with safe, effective, and nourishing
                      ingredients.
                    </p>
                  </div>
                </div>

                <div className="why-choose-left-info-div">
                  <div>
                    <i className="fa-solid fa-users"></i>
                  </div>

                  <div>
                    <h4>Satisfaction Guaranteed</h4>
                    <p>
                      Your satisfaction is our top priority. We offer a
                      hassle-free return and exchange policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="why-choose-left-info-img-div">
                <img
                  src="https://img.freepik.com/premium-photo/asian-girl-has-nice-hairstyle-pink-background_639785-3839.jpg"
                  alt="why_choose_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
