import React from 'react';
import './NewsGPT.css';

const NewsGPT = () => {
  return (
    <section className="news-gpt-container">
      <div className="news-left">
        <h1><span className="bold">Trending</span> News</h1>
        <div className="news-card">
          <img src="13.png" alt="News" className="news-image" />
          <div className="news-date-time">
            <span>March 15, 2024</span>
            <span>10:30 AM</span>
          </div>
          <p className="news-description">
            As more families relocate overseas for work, education, or lifestyle changes, the challenges of parenting abroad are coming into sharper focus.
          </p>
          <span className="news-tag">Canada</span>
        </div>
      </div>

      <div className="news-right">
        <input
          className="input-question"
          type="text"
          placeholder="Ask anything about studying abroad..."
        />
        <div className="button-container">
          <button className="submit-btn">Submit</button>
          <button className="refresh-btn">Refresh</button>
        </div>
        <h2 className="ask-heading">Feel Free To Ask What You Need</h2>

        <div className="ask-area-container">
          {/* Static placeholder message UI */}
          <div className="message user">User message will appear here</div>
          <div className="message ai">AI response will appear here</div>
        </div>
      </div>
    </section>
  );
};

export default NewsGPT;
