import React from 'react';
import './Language.css';

const Language = () => {
  return (
    <section className="language-section">
      <div className="language-left">
        <h1>Languages Training</h1>
        <p>language is the ultimate tool to move forward</p>
      </div>
      <div className="language-right">
        <button className="lang-btn french">French</button>
        <button className="lang-btn german">German</button>
        <button className="lang-btn japanese">Japanese</button>
        <button className="lang-btn chinese">Mandarin</button>
        <button className="lang-btn russian">Russian</button>
        <button className="lang-btn portuguese">Portuguese</button>
        <button className="lang-btn spanish">Spanish</button>
        <button className="lang-btn english">English</button>
        <button className="lang-btn korean">Korean</button>
        <button className="lang-btn dutch">Dutch</button>
        <button className="lang-btn italian">Italian</button>
        <button className="lang-btn indonesian">Indonesian</button>
        <button className="lang-btn arabic">Arabic</button>
        <button className="lang-btn hindi">Hindi</button>
        <button className="lang-btn swahili">Swahili</button>
        <button className="lang-btn turkish">Turkish</button>
      </div>
    </section>
  );
};

export default Language;