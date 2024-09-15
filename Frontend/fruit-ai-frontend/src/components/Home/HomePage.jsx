// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to FruitAI</h1>
      <div className="home-links">
        <Link to="/chatbot" className="home-link">Chatbot</Link>
        <Link to="/translator" className="home-link">Translator</Link>
        <Link to="/faq" className="home-link">FAQ</Link>
        <Link to="/about" className="home-link">About</Link>
      </div>
    </div>
  );
};

export default HomePage
