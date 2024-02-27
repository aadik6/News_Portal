import React from "react";
import "../adminSidebar/adminSidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminSidebarVerticle() {
  const navigate = useNavigate();

 function logout(){
  localStorage.clear()
  alert("You are Logged out")
  navigate("/admin")
 }
  return (
    <>
      <div className="adminSidebar">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/adminNews">News</Link>
          </li>
          <li>
            <Link to="/addNews">Add News</Link>
          </li>
          <li>
            <Link to="/adminHaveNews">Have News</Link>
          </li>
          <li>
            <Link to="/traffic">Traffic</Link>
          </li>
          <li>
            <Link to="/addUser">Add User</Link>
          </li>
          <li onClick={logout}>Logout</li>
        </ul>
      </div>
    </>
  );
}

export default AdminSidebarVerticle;
