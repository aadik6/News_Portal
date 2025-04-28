import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getSession, useAuth } from '../util/authContext';
import "react-toastify/dist/ReactToastify.css";
import './login.css';
import { toast } from 'react-toastify';

function LoginPage() {
    const navigate = useNavigate();
    const { login, loginError } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { access } = getSession();

    useEffect(() => {
        if (access) {
            navigate("/dashboard");
        }
    }, [access, navigate]);

    const loginUser = async () => {
        try {
            await login(email, password, navigate);
        } catch (error) {
            console.error("Login Error:", loginError || error);
            toast.error("Login failed");
        }
    };

    return (
        <div className='login'>
            <div className="loginPage">
                <input
                    type="email"
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="kaka">
                    <label>
                        <input 
                            type='checkbox'
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <span>Show</span>
                    </label>
                    <Link to="/reset">Forgot?</Link>
                </div>
                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;
