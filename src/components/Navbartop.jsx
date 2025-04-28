import React, { useState, useEffect } from 'react';
import { FaPhone, FaWhatsapp,FaEnvelope } from 'react-icons/fa';
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
        
          <ul className='contact-info'>
            <li className='contfirst'>
              <FaPhone className="icon" size={18} />
              <span>+91 90036 19777</span>
            </li>
            <li>
              <FaWhatsapp className="icon" size={20} />
              <span>+91 90039 46446</span>
            </li>
            <li>
              <FaEnvelope className="icon" size={20} />
              <span>Study@payana.com</span>
            </li>
          </ul>
        

        

        <div className={`contact-nav ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className='nav-links'>
            {['tech',  'mbbs','study', 'language', 'invest', 'work'].map((category, index) => (
              <li
                key={category}
                data-category={category}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
                onClick={() => handleClickScroll(category)}
                className={activeCategory === category ? 'active' : ''}
              >
                {['Study Tech', 'Study MBBS', 'Study Arts ', 'Language', 'Invest', 'Work'][index]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbartop;