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
import DashboardProducts from "./Pages/Dashboard/DashboardMultiComponents/DashboardProducts";
import AddProduct from "./Pages/Dashboard/DashboardMultiComponents/AddProduct";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Success from "./Pages/Cart/Success";
import MyOrder from "./Pages/MyOrder/MyOrder";
import DashboardOrder from "./Pages/Dashboard/DashboardMultiComponents/DashboardOrder";
import DashboardContactUs from "./Pages/Dashboard/DashboardMultiComponents/DashboardContactUs";
import DashboardHome from "./Pages/Dashboard/DashboardMultiComponents/DashboardHome";
import Error404 from "./Pages/Error404/Error404";

function App() {
  const location = useLocation();

  const excludedRoutes = [
    "/dashboard",
    "/dashboard/users",
    "/dashboard/products",
    "/dashboard/product-add",
    "/dashboard/orders",
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
        <Route path="/products" element={<Products />} />

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
            path=""
            element={
              <AdminRoute>
                <DashboardHome />
              </AdminRoute>
            }
          />

          <Route
            path="users"
            element={
              <AdminRoute>
                <DashboardUsers />
              </AdminRoute>
            }
          />

          <Route
            path="products"
            element={
              <AdminRoute>
                <DashboardProducts />
              </AdminRoute>
            }
          />

          <Route
            path="/dashboard/product-add"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />

          <Route
            path="orders"
            element={
              <AdminRoute>
                <DashboardOrder />
              </AdminRoute>
            }
          />

          <Route
            path="contact-us"
            element={
              <AdminRoute>
                <DashboardContactUs />
              </AdminRoute>
            }
          />
        </Route>

        {/* ================== */}
        {/* Private Route Area */}
        {/* ================== */}

        <Route
          path="/purchase/:id"
          element={
            <PrivateRoute>
              <Purchase />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
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

        <Route
          path="/success"
          element={
            <PrivateRoute>
              <Success />
            </PrivateRoute>
          }
        />

        <Route
          path="/my-order"
          element={
            <PrivateRoute>
              <MyOrder />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Error404 />} />
      </Routes>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}
export default App;
