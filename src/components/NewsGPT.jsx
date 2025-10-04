import React, { useState, useEffect } from 'react';
import './NewsGPT.css';
import { FaCheckCircle } from 'react-icons/fa';

const NewsGPT = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(`${API_URL}/news`);
      const data = await response.json();
      
      if (data.success) {
        setNewsArticles(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  const handleArticleView = async (articleId) => {
    try {
      await fetch(`${API_URL}/news/${articleId}/view`, {
        method: 'POST'
      });
    } catch (error) {
      console.error('Error tracking view:', error);
    }
  };

  // Skeleton Loader Component
  const SkeletonCard = () => {
    const shimmerStyle = {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#e0e0e0',
    };

    const shimmerAnimation = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
      animation: 'shimmer 1.5s infinite',
    };

    return (
      <div className="news-card" style={{ pointerEvents: 'none' }}>
        {/* Image Skeleton */}
        <div 
          className="news-image" 
          style={{
            ...shimmerStyle,
            height: '200px',
            borderRadius: '8px 8px 0 0',
          }}
        >
          <div style={shimmerAnimation}></div>
        </div>

        {/* Date & Time Skeleton */}
        <div className="news-date-time" style={{ display: 'flex', gap: '10px', padding: '10px' }}>
          <div style={{
            ...shimmerStyle,
            width: '120px',
            height: '16px',
            borderRadius: '4px',
          }}>
            <div style={shimmerAnimation}></div>
          </div>
          <div style={{
            ...shimmerStyle,
            width: '80px',
            height: '16px',
            borderRadius: '4px',
          }}>
            <div style={shimmerAnimation}></div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="news-content">
          <div style={{
            ...shimmerStyle,
            width: '100%',
            height: '14px',
            borderRadius: '4px',
            marginBottom: '8px',
          }}>
            <div style={shimmerAnimation}></div>
          </div>
          <div style={{
            ...shimmerStyle,
            width: '95%',
            height: '14px',
            borderRadius: '4px',
            marginBottom: '8px',
          }}>
            <div style={shimmerAnimation}></div>
          </div>
          <div style={{
            ...shimmerStyle,
            width: '90%',
            height: '14px',
            borderRadius: '4px',
            marginBottom: '8px',
          }}>
            <div style={shimmerAnimation}></div>
          </div>
          <div style={{
            ...shimmerStyle,
            width: '88%',
            height: '14px',
            borderRadius: '4px',
            marginBottom: '12px',
          }}>
            <div style={shimmerAnimation}></div>
          </div>

          {/* Tag Skeleton */}
          <div style={{
            ...shimmerStyle,
            width: '80px',
            height: '24px',
            borderRadius: '12px',
            marginTop: '10px',
          }}>
            <div style={shimmerAnimation}></div>
          </div>
        </div>

        <style>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <section className="news-gpt-container">
      <div className="news-left">
        <h1><span className="bold">Trending</span> News</h1>
        
        {loading ? (
          <div className="news-cards-wrapper">
            {/* Show 2 skeleton cards while loading */}
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div className="news-cards-wrapper">
            {newsArticles.length === 0 ? (
              <p className="no-news">No news articles available.</p>
            ) : (
              newsArticles.map((article) => {
                // Parse description if it's a JSON string
                const descriptions = Array.isArray(article.description) 
                  ? article.description 
                  : JSON.parse(article.description);
                
                return (
                  <div 
                    key={article.id} 
                    className="news-card"
                    onClick={() => handleArticleView(article.id)}
                  >
                    <img 
                      src={article.image} 
                      alt="News" 
                      className="news-image"
                        style={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
    display: 'block'
  }}
                    />
                    <div className="news-date-time">
                      <span>{article.date}</span>
                      <span>{article.time}</span>
                    </div>
                    <div className="news-content">
                      {descriptions.map((para, index) => (
                        <p key={index} className="news-description">
                          {para}
                        </p>
                      ))}
                      <span className="news-tag">{article.tag}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
      
      <div className="news-right">
        <div className="about-payana">
          
          <div className="payanatop">
            <h1>Why Payana Overseas?</h1>
          </div>

          <div className="responsehold1">
            <div className="holeone">
              <div className="stats-container">
                <div className="stat-item">20+ COUNTRIES</div>
                <div className="stat-item">700+ UNIVERSITIES</div>
              </div>
              
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>
                  Licensed consultant
                </li>
                <li className="feature-item">
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>
                  Direct counseling with experts
                </li>
                <li className="feature-item">
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>
                  Work while you study
                </li>
                <li className="feature-item">
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>
                  Post study work permit
                </li>
                <li className="feature-item">
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>
                  Accommodation guidance
                </li>
                <li className="feature-item">
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>
                  Certified trainers (IELTS, TOEFL,PTE)
                </li>
                <li className="feature-item">
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>
                  Foreign language trainings
                </li>
              </ul>
            </div>
            <div className="holetwo">
              <img src='realwatwe.svg' alt="Illustration" />
            </div>
          </div> 
          
          <div className="responsehold">
            <div className="responsedivide reddy">
              <h2>Mission</h2>
              <p className="about-paragraph">
                Striving to work closely with our clients to provide the best solution for their higher education, work and other immigration objectives by providing an integrated solution approach.
              </p>
            </div>
            <div className="responsedivide grenny">
              <h2>Vision</h2>
              <p className="about-paragraph">
                To make sure overseas education and overseas work options are highly reachable and affordable to every qualified individual irrespective of their financial status.
              </p>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default NewsGPT;
