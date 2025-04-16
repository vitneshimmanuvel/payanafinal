import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Navbartop.css';

const Navbartop = () => {
  const [activeCategory, setActiveCategory] = useState(null);

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
  };

  return (
    <div className='navbartop'>
      <div className='logo-section'>
        <img src="Payana Overseas Solutions.svg" alt="Logo" />  
      </div>
      <div className='contact-nav'>
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
  );
};

export default Navbartop;
