import React from "react";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import LightLogo from "../../Images/Assets/logo.png";

const Navbar = () => {
  // JQuery for Navbar
  $(window).scroll(function () {
    if ($(document).scrollTop() < 1) {
      $(".header").removeClass("fixed");
      $(".header").removeClass("active");
    } else if ($(document).scrollTop() > 40) {
      $(".header").removeClass("fixed");
      $(".header").addClass("active");
    } else {
      $(".header").addClass("fixed");
    }
  });
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="logo">
              <NavLink to="/">
                <img src={LightLogo} alt="logo" />
              </NavLink>
            </div>

            <input type="checkbox" id="click" />
            <label for="click" className="menu-btn">
              <i className="fas fa-bars"></i>
            </label>
            <ul>
              <li>
                <NavLink to="/" className="nav-links" activeClass="active">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/appoinment" className="nav-links">
                  Appoinment
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
