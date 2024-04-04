import React, { createContext, useContext, useState, useEffect } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loginError, setLoginError] = useState(null)

    const login = async (email, password, navigate) => {
        try {
            const result= await signInWithEmailAndPassword(auth, email, password);
            console.log(result.user.uid,"nama")
            alert("user logged in");
            console.log(auth.currentUser.emailVerified, "op");
            navigate('/News_Portal/dashboard');
            setSession(result)
        } catch (error) {
            console.error(error.code, "errorCode");
            console.error(error.message, "message");
            setLoginError(error.message)
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
