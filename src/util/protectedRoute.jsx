// ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import Dashboard from "../pages/dashboard/dashboard";
import { getSession } from "../util/authContext";
const ProtectedRoute = () => {

  const {access}=getSession();
  console.log(access,"access")
  console.log(access,"aadi")
  return access ? (
    <div className="adminDash">
      <Outlet />
    </div>
  ) : (
    <Navigate to="/News_Portal/admin" />
  );
};

export default ProtectedRoute;
