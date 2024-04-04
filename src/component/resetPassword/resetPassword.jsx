import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [resetError, setResetError] = useState(null);
    const [resetSuccess, setResetSuccess] = useState(false);

    const handleResetPassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                setResetSuccess(true);
                setResetError(null);
                setEmail('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
                setResetError(errorMessage);
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
                        <Link to="/News_Portal/admin" className='resetToLogin'>Login</Link>
                    </>}
                {resetError && <p>{resetError}</p>}
            </div>
        </div>
    );
}

export default ResetPassword;
