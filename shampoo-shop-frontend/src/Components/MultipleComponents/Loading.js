import React from "react";

const Loading = () => {
  return (
    <>
      <div style={{ padding: "12rem 0rem" }}>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"></div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
            <div
              className="spinner-border"
              style={{ color: "#e986f0" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <div
              className="text-center"
              style={{ color: "#e986f0", fontSize: "1.3rem" }}
            >
              <p>Loading...</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
