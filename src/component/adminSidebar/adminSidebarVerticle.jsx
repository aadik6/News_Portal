import React, { useState } from "react";
import "../adminSidebar/adminSidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { getSession } from "../../util/authContext";
import {
  faAddressBook,
  faArrowTrendUp,
  faEnvelopesBulk,
  faHouseUser,
  faMessage,
  faNewspaper,
  faPenToSquare,
  faRightFromBracket,
  faSitemap,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminSidebarVertical() {
  const [showAdministratorMenu, setShowAdministratorMenu] = useState(false);

  function toggleAdministratorMenu() {
    setShowAdministratorMenu(!showAdministratorMenu);
  }
  const navigate = useNavigate();
  const { email } = getSession();
  function logout() {
    localStorage.clear();
    toast.success("You are logged out");
    navigate("/News_Portal");
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
          {email === "aadarshkumarman@gmail.com" && (
            <li onClick={toggleAdministratorMenu}>
              <div className="administrator">
                <FontAwesomeIcon icon={faSitemap} />
                <h4>Administrator</h4>
              </div>
              {showAdministratorMenu && (
                <ul className="nested">
                  <li>
                    <NavLink to="/News_Portal/addUser">
                      <FontAwesomeIcon icon={faUserPlus} />
                      <h4>Add User</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/News_Portal/adminHaveNews">
                      <FontAwesomeIcon icon={faEnvelopesBulk} />
                      <h4>Post Request</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/News_Portal/adminContact">
                      <FontAwesomeIcon icon={faAddressBook} />
                      <h4>Contact</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/News_Portal/adminSuggestion">
                      <FontAwesomeIcon icon={faMessage} />
                      <h4>Sugestions</h4>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/News_Portal/traffic">
                      <FontAwesomeIcon icon={faArrowTrendUp} />
                      <h4>Traffic</h4>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          )}
          <li onClick={logout}>
            <div className="administrator">
              <FontAwesomeIcon icon={faRightFromBracket} />
              <h4>Logout</h4>
            </div>
          </li>
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default AdminSidebarVertical;
