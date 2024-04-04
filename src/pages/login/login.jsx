import React, { useState } from 'react';
import { app } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../util/authContext';
import '../login/login.css';

function LoginPage() {
    const navigate = useNavigate();
    const { login, loginError } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const loginUser = () => {
        try {
            login(email, password, navigate);
        } catch (error) {
            // Handle error if needed
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
                        <span>show_password</span>
                    </label>
                    <Link to="/News_Portal/reset">Forgot?</Link>
                </div>
                <button onClick={loginUser}>Login</button>
                {loginError &&
                <p>{loginError}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
