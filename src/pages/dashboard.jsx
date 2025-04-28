import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./dashboard.css";
import AdminLayout from "../components/layout/adminLayout";
import { getSession } from "../util/authContext";

function Dashboard() {
  const { displayName, email, uid } = getSession();
  return (
    <AdminLayout>
      <>
        <div className="parentDashboard">
          <h1>{displayName}</h1>
          <p>
            Email: <strong>{email}</strong>
          </p>
          <p>
            User Id: <strong>{uid}</strong>
          </p>
        </div>
      </>
    </AdminLayout>
  );
}

export default Dashboard;
