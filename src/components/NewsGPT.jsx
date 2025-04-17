import React from 'react';
import './NewsGPT.css';

const NewsGPT = () => {
  return (
    <section className="news-gpt-container">
      <div className="news-left">
        <h1><span className="bold">Trending</span> News</h1>       
        <div className="news-cards-wrapper">
          <div className="news-card">
            <img src="13.png" alt="News" className="news-image" />
            <div className="news-date-time">
              <span>March 15, 2024</span>
              <span>10:30 AM</span>
            </div>
            <div className="news-content">
              <p className="news-description">
                As more families relocate overseas for work, education, or lifestyle changes, the challenges of parenting abroad are coming into sharper focus.
              </p>
              <p className="news-description">
                Recent studies show that international families face unique educational hurdles, including curriculum differences, language barriers, and cultural adaptation for children.
              </p>
              <p className="news-description">
                Experts recommend early planning and research when considering education abroad, with particular attention to accreditation, recognition, and future education pathways.
              </p>
              <span className="news-tag">Canada</span>
            </div>
          </div>
          <div className="news-card">
            <img src="9.png" alt="News" className="news-image" />
            <div className="news-date-time">
              <span>April 01, 2024</span>
              <span>11:00 AM</span>
            </div>
            <div className="news-content">
              <p className="news-description">
                Universities across Europe see a rise in Indian students enrolling in AI and tech-related courses in 2024.
              </p>
              <p className="news-description">
                The trend reflects growing interest in European education systems that offer practical training, research opportunities, and favorable post-study work permits.
              </p>
              <p className="news-description">
                Courses in artificial intelligence, data science, and cybersecurity are particularly popular, with many programs offering direct industry connections and internship opportunities.
              </p>
              <span className="news-tag">Germany</span>
            </div>
          </div>
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
          <div className="message user">User message will appear here</div>
          <div className="message ai">AI response will appear here</div>
        </div>
      </div>
    </section>
  );
};

export default NewsGPT;