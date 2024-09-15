// FaqPage.jsx
import React, { useState, useEffect } from 'react';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/faqs')
      .then((response) => response.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <div>
      <h2>FAQs</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqPage
