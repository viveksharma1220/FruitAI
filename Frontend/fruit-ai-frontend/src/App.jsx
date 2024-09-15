// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FaqPage from './components/Faq/FaqPage';
import TranslatorPage from './components/Translator/TranslatorPage';
import ChatbotPage from './components/ChatBot/ChatbotPage';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import AboutPage from './components/About/AboutPage';
import "./App.css"



function App() {
  return (
    <div className='container'>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/translator" element={<TranslatorPage />} />
    </Routes>
  </Router>
  </div>
  );
}

export default App;
