import React, { createContext, useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loginError, setLoginError] = useState(null)

    const login = async (email, password, navigate) => {
        try {
            const result= await signInWithEmailAndPassword(auth, email, password);
            toast.success("User logged in")
            // console.log(auth.currentUser.emailVerified, "op");
            navigate('/dashboard');
            setSession(result)
        } catch (error) {
            // console.error(error.code, "errorCode");
            // console.error(error.message, "message");
            setLoginError(error.message)
            toast.error(`${error.message}`)
        }
    };

    const logout = () => {
        localStorage.clear()
    };


    return (
        <AuthContext.Provider value={{ login, logout, loginError }}>
            {children}
        </AuthContext.Provider>
    );
};

export const setSession = (result)=>{
    localStorage.setItem("user",JSON.stringify(result))
}

export const getSession = () => {
    const access = localStorage.getItem("user");

    if (access) {
        const userObject = JSON.parse(access);
        const { displayName, email, uid } = userObject.user;
        return { displayName, email , access, uid};
    }

    return {access:null}
};

export const useAuth = () => {
    return useContext(AuthContext);
};
