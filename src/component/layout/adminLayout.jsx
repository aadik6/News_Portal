import React from "react";
import "../layout/adminLayout.css";
import AdminSidebarHorizontal from "../adminSidebar/adminSidebarHorizontal";
import AdminSidebarVerticle from "../adminSidebar/adminSidebarVerticle";
function AdminLayout({ children }) {
  return (
    <div className="adminLayout">
      <div className="horizontal">
        <AdminSidebarHorizontal />
      </div>
      <div className="adminBody">
        <div className="verticle">
          <AdminSidebarVerticle />
        </div>

        <div className="Admin-childrenContet">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
