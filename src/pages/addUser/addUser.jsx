import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../component/layout/adminLayout";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../addUser/addUser.css";

const AddUser = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  };

  const [user, setUser] = useState(initialState);

  const { email, password, confirmPassword, displayName } = user;

  const signupUser = async () => {
    try {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const nameRegex = /^[^\d]*$/;
      if (!nameRegex.test(displayName)) {
        toast.error("Name cannot contain numbers");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const authenticatedUser = userCredential.user;

      // Update user profile with display name
      await updateProfile(authenticatedUser, {
        displayName: displayName,
      });

      toast.success("User created successfully");
      setUser(initialState);
    } catch (error) {
      console.error("Error signing up:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <AdminLayout>
      <>
        <div className="parent-signup">
          <div className="signup">
            <div className="userDetails">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={displayName}
                  onChange={(e) =>
                    setUser({ ...user, displayName: e.target.value })
                  }
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <button onClick={signupUser} className="signup-btn">
              Create User
            </button>
          </div>
        </div>
      </>
      <ToastContainer />
    </AdminLayout>
  );
};

export default AddUser;
