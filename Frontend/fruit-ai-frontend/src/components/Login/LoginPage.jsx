// LoginPage.jsx
import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = '/home'; // Redirect to home page on login
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage
