import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login.jsx";
import SignUp from "./components/Login/SignUp.jsx";
import Forget from "./components/Login/Forget.jsx";
import Home from "./components/Home/Home.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import ResetPassword from "./components/Login/ResetPassword.jsx";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Protected Routes
import ProtectedRoute from "./components/Home/ProtectedRoute.jsx";
import AdminRoute from "./components/Dashboard/AdminRoute.jsx";
import AddProduct from "./components/Dashboard/AddProduct.jsx";
import AllProduct from "./components/Dashboard/AllProduct.jsx";
import AllUser from "./components/Dashboard/AllUser.jsx";

 

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/dashboard/addProduct" element={<AddProduct />} />
        <Route path="/dashboard/allProduct" element={<AllProduct />} />
        <Route path="/dashboard/allUsers" element={<AllUser />} />





        {/* ✅ Protected Home (Logged in users) */}
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* ✅ Admin only Dashboard */}
        <Route
          path="/Dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
      </Routes>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};

export default App;
