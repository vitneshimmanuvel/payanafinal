import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="banner-container">
      <div className="banner-left">
        <img src='banner.svg' className='bannerimg' alt="Banner Image" />
      </div>
      <div className="banner-right">
        <button className="category-btn" onClick={() => scrollToSection('tech')}> STUDY Tech</button>
        <button className="category-btn" onClick={() => scrollToSection('mbbs')}>STUDY MBBS</button>
        <button className="category-btn" onClick={() => scrollToSection('study')}>STUDY ARTS</button>
        <button className="category-btn" onClick={() => scrollToSection('language')}>Language</button>
        <button className="category-btn" onClick={() => scrollToSection('invest')}>Invest</button>
        <button className="category-btn" onClick={() => scrollToSection('work')}>Work</button>
      </div>
    </div>
  );
};

export default BannerSection;