import React, { useState } from 'react';
import axios from 'axios';
import './NewsGPT.css';

const NewsGPT = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

  
    setMessages([...messages, { text: input, type: 'user' }]);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: input },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      setMessages(currentMessages => [...currentMessages, { text: response.data.choices[0].message.content, type: 'ai' }]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const clearChat = () => {
    setInput('');
    setMessages([]);
  };

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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="button-container">
          <button className="submit-btn" onClick={sendMessage}>Submit</button>
          <button className="refresh-btn" onClick={clearChat}>Refresh</button>
        </div>
        <h2 className="ask-heading">Feel Free To Ask What You Need</h2>
        
        <div className="ask-area-container">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGPT;