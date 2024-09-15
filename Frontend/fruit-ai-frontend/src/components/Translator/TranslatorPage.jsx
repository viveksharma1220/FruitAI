// TranslatorPage.jsx
import React, { useState } from 'react';
import './TranslatorPage.css';

const TranslatorPage = () => {
  const [input, setInput] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Dummy translation logic, replace with API call
    setTranslatedText(`Translated: ${input}`);
  };

  return (
    <div className="translator-container">
      <h2>Translator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>{translatedText}</p>}
    </div>
  );
};

export default TranslatorPage
