import React, { useState } from "react";
import "../adminSidebar/adminSidebar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faNewspaper,
  faPenToSquare,
  faRightFromBracket,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

function AdminSidebarVertical() {
  const navigate = useNavigate();
  const [showAdministratorMenu, setShowAdministratorMenu] = useState(false);

  function toggleAdministratorMenu() {
    setShowAdministratorMenu(!showAdministratorMenu);
  }

  function logout() {
    localStorage.clear();
    alert("You are Logged out");
    navigate("/admin");
  }

  return (
    <>
      <div className="adminSidebar">
        <ul>
          <li>
            <NavLink to="/News_Portal/dashboard">
              <FontAwesomeIcon icon={faHouseUser} />
              <h4>Dashboard</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to="/News_Portal/adminNews">
              <FontAwesomeIcon icon={faNewspaper} />
              <h4>News</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to="/News_Portal/addNews">
              <FontAwesomeIcon icon={faPenToSquare} />
              <h4>Add News</h4>
            </NavLink>
          </li>
          <li onClick={toggleAdministratorMenu}>
            <div className="administrator">
              <FontAwesomeIcon icon={faSitemap} />
              <h4>Administrator</h4>
            </div>
            {showAdministratorMenu && (
              <ul className="nested">
                <li>
                  <NavLink to="/News_Portal/addUser">Add User</NavLink>
                </li>
                <li>
                  <NavLink to="/News_Portal/adminHaveNews">Have News</NavLink>
                </li>
                <li>
                  <NavLink to="/News_Portal/adminContact">Contacts</NavLink>
                </li>
                <li>
                  <NavLink to="/News_Portal/adminSuggestion">Suggestions</NavLink>
                </li>
                <li>
                  <NavLink to="/News_Portal/traffic">Traffic</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li onClick={logout}>
            <div className="administrator">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <h4>Logout</h4>
            </div>
           
          </li>
        </ul>
      </div>
    </>
  );
}

export default AdminSidebarVertical;
