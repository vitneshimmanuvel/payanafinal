import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp, FaBars } from 'react-icons/fa';
import './Navbartop.css';

const Navbartop = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHoverEffect = (category, isEnter) => {
      const bannerBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
      if (bannerBtn) {
        bannerBtn.classList.toggle('hover-pulse', isEnter);
      }
    };
    if (activeCategory) {
      handleHoverEffect(activeCategory, true);
      return () => handleHoverEffect(activeCategory, false);
    }
  }, [activeCategory]);

  const handleClickScroll = (category) => {
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); 
  };

  return (
    <div className='navbartop'>
      <div className='logo-section'>
        <img src="Payana Overseas Solutions.svg" alt="Logo" />
      </div>
      
      <div className="coloumintop">
        <div className='mobile-contact'>
          <ul className='contact-info'>
            <li>
              <FaPhone className="icon" size={18} />
              <span>+91 90036 19777</span>
            </li>
            <li>
              <FaWhatsapp className="icon" size={20} />
              <span>+91 90039 46446</span>
            </li>
          </ul>
        </div>

        <div className='burger-menu' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FaBars size={24} />
        </div>

        <div className={`contact-nav ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className='nav-links'>
            {['tech', 'study', 'mbbs', 'language', 'invest', 'work'].map((category, index) => (
              <li
                key={category}
                data-category={category}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
                onClick={() => handleClickScroll(category)}
                className={activeCategory === category ? 'active' : ''}
              >
                {['Tech/ARTS', 'Study', 'MBBS', 'Language', 'Invest', 'Work'][index]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbartop;