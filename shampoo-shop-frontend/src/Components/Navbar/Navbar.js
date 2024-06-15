import React from "react";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import LightLogo from "../../Images/Assets/logo.png";
import useFirebase from "../../Hooks/useFirebase";
import useFunction from "../../Hooks/useFunction";

const Navbar = () => {
  const { userInfo, handleLogout } = useFirebase();
  const { admin, quantityTotal } = useFunction();

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
                <NavLink to="/products" className="nav-links">
                  Products
                </NavLink>
              </li>

              {userInfo.email ? (
                <>
                  <li>
                    <NavLink to="/my-order" className="nav-links">
                      My Order
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="" className="nav-links" onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/user-profile" className="nav-links">
                      <i className="fa-solid fa-user"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart" className="nav-links">
                      <i className="fa fa-shopping-cart cart-icon2"></i>
                      <span className="cart-total cart-total-2">
                        {quantityTotal}
                      </span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login" className="nav-links">
                      Login
                    </NavLink>
                  </li>
                </>
              )}

              {userInfo.email && admin === true && (
                <li>
                  <NavLink to="/dashboard" className="nav-links">
                    <i className="fa-solid fa-chart-bar"></i>
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
