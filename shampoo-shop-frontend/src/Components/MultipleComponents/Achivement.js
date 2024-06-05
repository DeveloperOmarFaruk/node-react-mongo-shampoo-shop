import React from "react";
import "./MultipleComponents.css";
import CountUp from "react-countup";

const Achivement = () => {
  return (
    <>
      <div className="achivement-container">
        <div className="section">
          <div className="row gx-5 gy-5">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="achivement-div">
                <h1>
                  <CountUp delay={3} duration={8} start={0} end={10} />M +
                </h1>

                <h5>Happy Customers</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="achivement-div">
                <h1>
                  <CountUp delay={3} duration={8} start={0} end={50} /> +
                </h1>

                <h5>Our Products</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="achivement-div">
                <h1>
                  <CountUp delay={3} duration={8} start={0} end={20} /> +
                </h1>

                <h5>Awards Win</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="achivement-div">
                <h1>
                  <CountUp delay={3} duration={8} start={0} end={500} /> +
                </h1>

                <h5>Sponsorship</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achivement;
