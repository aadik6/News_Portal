import React from 'react';

function FirebaseErrorCard() {
  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>Oops! Something went wrong.</h2>
      <p style={styles.message}>
        We couldn't load the data due to a connectivity issue. This might be because we are on a free plan or your internet connection is unstable.
      </p>
      <button style={styles.button} onClick={() => window.location.reload()}>
        Reload Page
      </button>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    color: '#333',
  },
  message: {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#666',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FirebaseErrorCard;
