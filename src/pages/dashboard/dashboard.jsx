import React from "react";
import AdminLayout from "../../component/layout/adminLayout";
import { getSession, useAuth } from "../../util/authContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../dashboard/dashboard.css'

function Dashboard() {
  const {displayName,email,uid}=getSession()
  return (
    <AdminLayout>
      <>
        <div className="parentDashboard">
          <h1>{displayName}</h1>
          <p>{email}</p>
          <p>{uid}</p>
        </div>
        <ToastContainer/>
      </>
    </AdminLayout>
  );
}

export default Dashboard;
