import React from "react";
import { Outlet, useNavigate } from "react-router";
import useFunction from "../../Hooks/useFunction";
import useFirebase from "../../Hooks/useFirebase";
import { NavLink } from "react-router-dom";
import BrandLogo from "../../Images/Assets/logo.png";
import "./Dashboard.css";

const DashboardApp = () => {
  const { isOpen, setIsopen, navigate } = useFunction();
  const { handleLogout } = useFirebase();

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="logo_content" style={{ marginBottom: "40px" }}>
            <div className="logo">
              <div className="logoname" style={{ margin: "5px" }}>
                <img
                  src={BrandLogo}
                  alt="brand_log"
                  style={{
                    margin: "12px 0px 0px 5px",
                    height: "40px",
                    width: "120px",
                  }}
                />
              </div>
            </div>
            <i
              className="fa-solid fa-bars"
              id="btn"
              style={{ fontSize: "20px" }}
              onClick={ToggleSidebar}
            ></i>
          </div>
          <ul className="nav_list">
            <li>
              <NavLink to="">
                <i className="fa-solid fa-table-cells"></i>
                <span className="link_names">Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="users">
                <i className="fa-solid fa-users"></i>
                <span className="link_names">Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="services">
                <i className="fa-solid fa-server"></i>
                <span className="link_names">Services</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="doctors">
                <i className="fa-solid fa-stethoscope"></i>
                <span className="link_names">Doctor's</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="contact-us">
                <i className="fa-regular fa-envelope"></i>
                <span className="link_names">Contact</span>
              </NavLink>
            </li>
          </ul>

          <div className="back-home">
            <h6
              onClick={() => {
                navigate(`/`);
                window.scrollTo(0, 0);
              }}
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-house"></i>{" "}
              <span className="link_names"> Back Home</span>
            </h6>
          </div>

          <div className="profile_content">
            <div className="profile">
              <div className="profile_details"></div>

              <div>
                <i
                  className="fa-solid fa-arrow-right-from-bracket"
                  id="log_out"
                  onClick={handleLogout}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className="home_content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardApp;
