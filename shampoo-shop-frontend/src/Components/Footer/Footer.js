import React from "react";
import "./Footer.css";
import FooterLogo from "../../Images/Assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="fooer-container">
        <div className="section">
          <div className="row gx-5 gy-5">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="footer-div">
                <img src={FooterLogo} alt="footer_logo" />
                <p>
                  Choosing our shampoo shop means investing in your hair’s
                  health and beauty with products you can trust. Thank you for
                  making us your go-to source for all things hair care!
                </p>

                <div className="footer-div-icon">
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="row gx-5 gy-5">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="footer-div-link">
                    <h4>Services</h4>
                    <p>
                      <Link to="#">Satin Soft</Link>
                    </p>
                    <p>
                      <Link to="#">Lush Locks</Link>
                    </p>
                    <p>
                      <Link to="#">Hair Heaven</Link>
                    </p>
                    <p>
                      <Link to="#">Miracle Maker</Link>
                    </p>
                    <p>
                      <Link to="#">Flowing Follicles</Link>
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="footer-div-link">
                    <h4>Useful Links</h4>
                    <p>
                      <Link to="#">Home</Link>
                    </p>
                    <p>
                      <Link to="#">About</Link>
                    </p>
                    <p>
                      <Link to="#">Products</Link>
                    </p>
                    <p>
                      <Link to="#">Review</Link>
                    </p>
                    <p>
                      <Link to="#">Contact Us</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="footer-div-link">
                <h4>Subscribe</h4>
                <form>
                  <div class="form-floating mt-4 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      style={{ border: "1px solid #c033ca" }}
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
                <p>
                  Get The Latest Updates via email. Any time you may unsubscribe
                </p>
              </div>
            </div>
          </div>

          <div
            className="d-flex flex-wrap-reverse justify-content-between align-center"
            style={{ margin: "4rem auto 1rem auto" }}
          >
            <div className="footer-div-copyright">
              <p>
                © Website{" "}
                <span style={{ color: "  color: #054d56", fontWeight: "bold" }}>
                  2024
                </span>{" "}
                | All Rights Reserved | Developed by{" "}
                <span style={{ color: "  color: #054d56", fontWeight: "bold" }}>
                  Developer.OmarFaruk
                </span>
              </p>
            </div>

            <div className="d-flex justify-content-start align-center footer-div-copyright">
              <p>
                <Link>Privacy</Link> |
              </p>

              <p>
                <Link>Terms</Link> |
              </p>
              <p>
                <Link>Help</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
