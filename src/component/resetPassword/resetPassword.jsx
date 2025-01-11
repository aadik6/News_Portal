import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);

    const handleResetPassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                setResetSuccess(true);
                setEmail('');
                toast.success("Reset link sent successfully")
            })
            .catch((error) => {
                const errorMessage = error;
                console.log(error)
                toast.error(`${errorMessage}`)
                setResetSuccess(false);
            });
    };

    return (
        <div className='reset login'>
            <div className='resetPw loginPage'>
                <h2>Reset Password</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleResetPassword}>Reset Password</button>
                {resetSuccess &&
                    <>
                        <p>Password reset email sent successfully!</p>
                        <Link to="/admin" className='resetToLogin'>Login</Link>
                    </>}
            </div>
        </div>
    );
}

export default ResetPassword;
