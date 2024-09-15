// ChatbotPage.jsx
import React from 'react';
import './ChatbotPage.css';

const fruits = [
  { name: 'Apple', details: 'An apple a day keeps the doctor away.' },
  { name: 'Banana', details: 'Rich in potassium.' },
  { name: 'Orange', details: 'Vitamin C rich fruit.' },
  { name: 'Apple', details: 'An apple a day keeps the doctor away.' },
  { name: 'Banana', details: 'Rich in potassium.' },
  { name: 'Orange', details: 'Vitamin C rich fruit.' },
  { name: 'Apple', details: 'An apple a day keeps the doctor away.' },
  { name: 'Banana', details: 'Rich in potassium.' },
  { name: 'Orange', details: 'Vitamin C rich fruit.' }
];

const ChatbotPage = () => {
  return (
    <div className="chatbot-container">
      <h2>Fruits List</h2>
      <div className="fruit-cards">
        {fruits.map((fruit, index) => (
          <div className="fruit-card" key={index}>
            <h3>{fruit.name}</h3>
            <p>{fruit.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatbotPage
