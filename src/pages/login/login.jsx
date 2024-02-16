import React, { useState } from 'react';
import { app } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../util/authContext';
import '../login/login.css'

function LoginPage() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        try {
            login(email, password, navigate);
        } catch (error) {
            // Handle error if needed
        }
    };

    return (
        <>
            <div className="loginPage">
                <input
                    type="email"
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={loginUser}>Login</button>
            </div>
        </>
    );
}

export default LoginPage;
