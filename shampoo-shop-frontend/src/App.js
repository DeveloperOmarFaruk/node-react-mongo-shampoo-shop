import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import UserProfile from "./Pages/UserProfile/UserProfile";
import DashboardApp from "./Pages/Dashboard/DashboardApp";
import DashboardUsers from "./Pages/Dashboard/DashboardMultiComponents/DashboardUsers";
import AdminRoute from "./AdminRoute/AdminRoute";

function App() {
  const location = useLocation();

  const excludedRoutes = [
    "/dashboard",
    "/dashboard/users",
    "/dashboard/services",
    "/dashboard/doctors",
    "/dashboard/contact-us",
  ];

  return (
    <>
      {!excludedRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================== */}
        {/* Admin  Route Area */}
        {/* ================== */}

        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <DashboardApp />
            </AdminRoute>
          }
        >
          <Route
            path="users"
            element={
              <AdminRoute>
                <DashboardUsers />
              </AdminRoute>
            }
          />
        </Route>

        {/* ================== */}
        {/* Private Route Area */}
        {/* ================== */}

        <Route
          path="/purchase"
          element={
            <PrivateRoute>
              <Purchase />
            </PrivateRoute>
          }
        />

        <Route
          path="/user-profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}
export default App;
