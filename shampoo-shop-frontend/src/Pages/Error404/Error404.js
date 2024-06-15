import React from "react";
import useFunction from "../../Hooks/useFunction";

const Error404 = () => {
  const { navigate } = useFunction();
  return (
    <>
      <div style={{ padding: "10rem 0rem" }}>
        <div className="section">
          <div className="text-center">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <img
                  src="https://img.freepik.com/premium-vector/error-404-concept-landing-page_278696-12.jpg?w=740"
                  alt="error_image"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
            </div>

            <button
              type="button"
              className="btn text-white"
              style={{ backgroundColor: "#c033ca" }}
              onClick={() => {
                navigate(`/`);
                window.scrollTo(0, 0);
              }}
            >
              Back Home Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
